import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Fragment } from 'react'
import { deleteEducation } from '../../actions/profile'
import './Education.css'

const Education = ({ education, deleteEducation }) => {
    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td aria-label="School">{edu.school}</td>
            <td aria-label="Degree" className="">{edu.degree}</td>
            <td aria-label="Years" className="">
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {
                    edu.to === null ? (
                        'Now'
                    ) : (
                        <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
                    )}
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => deleteEducation(edu._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    ))

    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className="test">School</th>
                        <th className="test">Degree</th>
                        <th className="test">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education)
