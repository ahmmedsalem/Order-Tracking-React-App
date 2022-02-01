import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return ( 

        <React.Fragment>
            <div className="menu-btn red" onClick={toggleClass}>
                <i className="fas fa-bars"></i>
            </div>
            <nav className="nav">
                <div className="left">
                <ul className={isActive ? 'main-menu show' : 'main-menu'}>
                    <li>
                        <a href="#" className="red">ENG</a>
                    </li>
                    <li>
                        <a href="#">تسجيل الدخول</a>
                    </li> 
                    <li>
                        <a href="#">تتبع شحنتك</a>
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
        </React.Fragment>
    );
}
 
export default Navbar;