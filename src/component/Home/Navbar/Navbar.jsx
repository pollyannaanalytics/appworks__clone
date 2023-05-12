import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import './navbar.css';


const Navbar = () => {

    //1. 顯現navbar 的原則：往下滾的時候就隱藏
    //2. 如何判別往下滾？目前長度大於上一次渲染的長度就是往下滾

    //步驟：
    //(1.)設定一個開關，預設是開著讓navbar顯示
    //(2.)當往下滾時，就把開關關起來

    const [hide, setHide] = useState(false);

    const controlShow = () => {
        if (window.scrollY > 300) {
            setHide(false)
        }
        else {
            setHide(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlShow);

        return () => {
            window.removeEventListener('scroll', controlShow)
        }
    }, [])

    return (
        <nav className={`nav ${hide && 'hidden'}`}>
            <div className='nav__container'>
                <Link to='/'><h4>Home</h4></Link>
                <Link to='/introduction'><h4>Introduction</h4></Link>
                <Link to='/application'><h4>Application</h4></Link>
            </div>
        </nav>
    )
}

export default Navbar