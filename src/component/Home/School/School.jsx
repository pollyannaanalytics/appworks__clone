
import React from 'react'
import './school.css'
import GradientBtn from './GradientBtn';
import { MdWorkHistory } from 'react-icons/md'
import { RiTeamFill } from 'react-icons/ri'
import { GiThreeFriends, GiMoneyStack } from 'react-icons/gi'



const School = () => {


    return (
        <div className='container container__school'>
            <div className='title__school'>
                <h2>AppWorks School</h2>
            </div>
            <div className='content__school'>
                <div className='p__school'>
                    <p>AppWorks School aims to provide the most practical training for those who are determined to become software developers.
                        <br />
                        Among our <em>660</em> graduates, <em>90%</em> of them became software engineers and joined Internet Companies like
                        <br />
                        <em>KKBOX</em>, <em>91APP</em>, <em>Tagtoo</em>, <em>Line TV</em>, <em>UDN Shopping</em>, <em>WeMo Scooter</em>, and <em>Gogoro</em>
                        <br />
                        to start their promising careers.</p>
                </div>
                <div className='special__cards'>

                    <div className='special__card'>
                        <div className='special__icon'><MdWorkHistory /></div>
                        <div className='special__title'><h4>Target to Employ</h4></div>
                    </div>
                    <div className='special__card'>
                        <div className='special__icon'><RiTeamFill /></div>
                        <div className='special__title'><h4>Practice with Enterprise</h4></div>
                    </div>
                    <div className='special__card'>
                        <div className='special__icon'><GiThreeFriends /></div>
                        <div className='special__title'><h4>Grow up with Peers</h4></div>
                    </div>
                    <div className='special__card'>
                        <div className='special__icon'><GiMoneyStack /></div>
                        <div className='special__title'><h4>Totally Free</h4></div>
                    </div>
                </div>

                <div className='btn__container'>
                    <GradientBtn name='/introduction' alt='Get to Know Programs' />
                </div>
            </div>
        </div>
    )
}

export default School