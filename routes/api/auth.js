const expresss = require('express')
const router = expresss.Router()
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')

// @route  GET api/auth
// @desc   Test route
// @acces  Public
router.get('/auth', auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route  POST api/auth
// @desc   Authentificate user & get token
// @access Public
router.post(
    '/auth',
    [
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Password is required'
        ).exists()
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body

        try {
            // Check user exists

            let user = await User.findOne({ email })

            if (!user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] })
            }

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                process.env.jwtSecret,
                { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err
                    res.json({ token })
                })
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
    })

module.exports = router