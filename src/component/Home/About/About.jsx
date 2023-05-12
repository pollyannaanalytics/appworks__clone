import React from 'react'
import './about.css'
import NumberMove from './NumberMove'
import PointMove from './PointMove'
const About = () => {
    return (
        <div className='container container__about'>
            <div className='container container__intro'>
                <div className='title__intro'>
                    <h4>Helping tech startups disrupt the world</h4>
                    <h4>SINCE 2009</h4>
                </div>
                <div className='p__intro'>
                    <p>In the making of a great company, founders make all the big calls.<br />
                        And investors play the supporting roles.
                        <br />As prior founders ourselves, we started AppWorks to play that role.<br />
                        So you can count on our support.
                        We love founders with passion, grit, and determination.
                        <br />We want to be the first investor to fund you and we want to help you go all the way.</p>
                </div>
            </div>

            <div className='container container__network img'>
                <div className='record__container'>
                    <div className='number__container'>
                        <div className='number'>
                            <div className='counter'>
                                <span><NumberMove n={472} /></span></div>
                            <div className='unit'>ACTIVE STARTUPS</div>
                        </div>
                        <div className='number'>
                            <div className='counter'>
                                <span><NumberMove n={1522} /></span></div>
                            <div className='unit'>FOUNDERS</div>
                        </div>
                        <div className='number'>
                            <div className='counter'>
                                <span><NumberMove n={23390} /></span></div>
                            <div className='unit'>EMPLOYEES</div>
                        </div>
                    </div>

                    <div className='number__container'>
                        <div className='number'>
                            <div className='counter'>$
                                <span><PointMove n={5.4} /></span>
                                B</div>
                            <div className='unit'>TOTAL RAISE</div>
                        </div>

                        <div className='number'>
                            <div className='counter'>$
                                <span><PointMove n={3.1} /></span>
                                B
                            </div>
                            <div className='unit'>TOTAL VALUATION</div>
                        </div>

                        <div className='number'>
                            <div className='counter'>$
                                <span><PointMove n={15.2} /></span>
                                B
                            </div>
                            <div className='unit'>ANNUAL REVENUES</div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default About