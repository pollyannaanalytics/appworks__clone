import React from 'react'
import '../Contacts/contacts.css'
import { AiFillGithub, AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai'
const Contacts = () => {



    return (
        <section id="contact">
            <div className='contact__container' >
                <div className='contact__title'>
                    <h4>About the Author</h4>
                    <h3>Pin-Yun Wu</h3>
                </div>
                <div className='contact__content'>
                    <div className='contact__icon'>
                        <a href="https://github.com/pollyannaanalytics"><AiFillGithub /></a>
                        <a href="https://medium.com/@frontendpollyanna"><AiFillMediumCircle /></a>
                        <a href="https://www.linkedin.com/in/pin-yun-wu-1aab06231/"><AiFillLinkedin /></a>
                    </div>
                    <div className='contact__info'>
                        <p>Email: <a href="mailto:pinyunwuu@gmail.com">pinyunwuu@gmail.com</a></p>
                        <p>My Website: <a href="https://pollyannaanalytics.github.io/pinyun_website/">Pin-Yun Wu</a></p>
                    </div>
                </div>
            </div >
        </section>
    )
}

export default Contacts