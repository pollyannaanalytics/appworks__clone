import React from 'react'
import HorizontalLabelPositionBelowStepper from './HorizontalLabelPositionBelowStepper'
import ProgramCard from './ProgramCard'
import '../Introduction/introduction.css'
import { MdOutlineMoreTime, MdOutlineSchool } from 'react-icons/md'
import introdata from './introdata.js'
import Navbar from '../Home/Navbar/Navbar'
const Introduction = () => {
    return (
        <div className='container introduction__container'>
            <Navbar />
            <h2>Program Introduction</h2>
            <div className='container introduction__content'>

                <div className='container info__container'>

                    <div className='info__content'>
                        <div className='info__title'>
                            <MdOutlineSchool />
                            <h4>Schedule and Location</h4>
                        </div>
                        <p>Remote Learning: 4 weeks in total.
                            <br />
                            On-site Learning: 16 weeks in total.
                            <br />
                            <br />
                            Address: 8th Floor, No. 99, Section 2, Ren'ai Road, Zhongzheng District, Taipei City, Taiwan (Near MRT Zhongxiao Xinsheng Station).</p>
                    </div>
                    <div className='info__content'>
                        <div className='info__title'>
                            <MdOutlineMoreTime />
                            <h4>Learning Mode and Hours</h4>
                        </div>
                        <p>First 4 weeks: Remote learning combined with online learning resources, requiring 40 hours of engagement per week.
                            <br />
                            <br />
                            Following 16 weeks: On-site intensive self-directed learning combined with in-person discussions and extensive project work, requiring 75-80 hours of participation per week.</p>
                    </div>
                </div>
                <div className='container stepper__container'>
                    <h3>Application Schedule</h3>
                    <HorizontalLabelPositionBelowStepper />

                    {introdata.map(intro =>
                        <ProgramCard program={intro} key={intro.id} />
                    )}
                </div>

            </div>

        </div>

    )
}

export default Introduction