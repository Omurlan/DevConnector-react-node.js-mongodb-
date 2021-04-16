import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Fragment } from 'react'
import { deleteExperience, getCurrentProfile } from '../../actions/profile'

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td aria-label="Company">{exp.company}</td>
            <td aria-label="Position">{exp.title}</td>
            <td aria-label="Years">
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {
                    exp.to === null ? (
                        'Now'
                    ) : (
                        <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
                    )}
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => deleteExperience(exp._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    ))

    return (
        <Fragment>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience, getCurrentProfile })(Experience)
