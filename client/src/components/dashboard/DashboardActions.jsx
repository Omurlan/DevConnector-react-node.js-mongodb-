import React from 'react'
import { Link } from 'react-router-dom'

const DashboardActions = () => {
    return (
        <div>
            <div className="dash-buttons">
                <Link to="/edit-profile" className="btn btn-light mb-1">
                    <i className="fas fa-user-circle text-primary" />
                    {'  '} &nbsp; Edit Profile
                </Link>

                <Link to="/add-experience" className="btn btn-light mb-1">
                    <i className="fab fa-black-tie text-primary" />
                    {'  '} &nbsp; Add Experience
                </Link>

                <Link to="/add-education" className="btn btn-light mb-1">
                    <i className="fas fa-graduation-cap text-primary" />
                    {'  '} &nbsp; Add Education
                </Link>
            </div>
        </div>
    )
}

export default DashboardActions
