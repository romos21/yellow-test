import React from 'react';
import './MainHeaderLinks.scss';
import {Link, useLocation} from "react-router-dom";
import paths from "../../../config/router/paths";

const MainHeaderLinks = (props) => {
    const {isMobile = false, mobileMenuOnViewChange} = props;
    const location = useLocation();
    return (
        <section className='header-links-section'>
            {
                isMobile &&
                <header className='menu-mobile-header'>
                    <svg className="logo-icon">
                        <use href="#logo"/>
                    </svg>
                    <svg className="cancel-icon" onClick={mobileMenuOnViewChange}>
                        <use href="#cancel"/>
                    </svg>
                </header>
            }
            <nav className={isMobile ? 'main-header-links-mob' : 'main-header-links'}>
                <Link to={paths.jogs}>
                    <p onClick={isMobile ? mobileMenuOnViewChange: null} className={location.pathname === paths.jogs ? 'active' : null}>JOGS</p>
                </Link>
                <Link to={paths.info}>
                    <p onClick={isMobile ? mobileMenuOnViewChange: null} className={location.pathname === paths.info ? 'active' : null}>INFO</p>
                </Link>
                <Link to={paths.contact}>
                    <p onClick={isMobile ? mobileMenuOnViewChange: null} className={location.pathname === paths.contact ? 'active' : null}>CONTACT US</p>
                </Link>
            </nav>
        </section>
    );
}

export default MainHeaderLinks;
