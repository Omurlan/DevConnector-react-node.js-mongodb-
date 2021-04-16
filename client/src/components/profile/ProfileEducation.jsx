import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({
    education: {
        school,
        degree,
        fieldofstudy,
        to,
        from,
        description
    }
}) => {
    return (
        <div>
            <p>
                <strong>School or Bootcamp: </strong> {school}
            </p>
            <p>
                <strong>Years: </strong>
                <Moment format='YYYY/MM/DD'>{from}</Moment> -
                {!to ? 'Now' : <span> <Moment format='YYYY/MM/DD'>{to}</Moment></span>}
            </p>
            <p>
                <strong>Degree: </strong> {degree}
            </p>
            <p>
                <strong>Field Of Study: </strong> {fieldofstudy}
            </p>
            <p>
                <strong>Description: </strong> {description}
            </p>
        </div>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
}

export default ProfileEducation
