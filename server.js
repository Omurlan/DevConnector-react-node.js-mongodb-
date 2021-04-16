const express = require('express')
const connectDB = require('./config/db')
const morgan = require('morgan')
const cors = require('cors')
const { readdirSync } = require('fs')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(bodyParser.json({ limit: '2mb' }))
app.use(morgan('dev'))
app.use(cors())

// Define Routes
readdirSync('./routes/api').map((route) =>
    app.use('/api', require('./routes/api/' + route))
)

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})