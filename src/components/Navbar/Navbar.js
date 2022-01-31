import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar.js';


const Navbar = () => {


    return ( 
        <nav className="nav">
            <div className="left">
            <ul className="main-menu">
                <li>
                    <a href="#" className="red">ENG</a>
                </li>
                <li>
                    <a href="#">تسجيل الدخول</a>
                </li> 
                <li>
                    <a href="#">تتبع شحنتك</a>
                    <SearchBar />
                </li>
                <li>
                    <a href="#" className="split-menu">كلم المبيعات</a>
                </li>
                <li>
                    <a href="#">الاسعار</a>
                </li>
                <li>
                    <a href="#">الرئيسية</a>
                </li>
            </ul>
            </div>
            <div className="right">
                <div className="logo">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.svg`} />
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;