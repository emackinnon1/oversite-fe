import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = ()  => {
    return (
        <div className="error-container">
            <img src="/images/404_page.png" alt="404 page"></img>
            <Link to='/' >
                <button className='back-to-login-btn'>Back to Main Page</button>
            </Link >

        </div>
    )
}

export default Error
