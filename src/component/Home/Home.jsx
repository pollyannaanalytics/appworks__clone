import React from 'react'
import About from './About/About'
import Header from './Header/Header'
import School from './School/School'
import Navbar from './Navbar/Navbar'
import Contacts from '../Contacts/Contacts'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <School />
            <Contacts />
        </div>
    )
}

export default Home