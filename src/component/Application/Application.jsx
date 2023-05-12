import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import './application.css'
import Form from './Form'
const Application = () => {
    return (

        <div className='container application__container'>
            <div className='application__nav'>
                <Navbar />
            </div>
            <h2>Application</h2>
            <div className="formWrapper">
                <div className="contactForm">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Application