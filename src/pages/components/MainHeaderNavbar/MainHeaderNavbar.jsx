import React from 'react';
import './MainHeaderNavbar.scss';
import pathsAccess from '../../../config/router/paths-access';
import MainHeaderLinks from "../MainHeaderLinks/MainHeaderLinks";
import {useLocation} from "react-router-dom";

const MainHeaderNavbar = (props) => {
    const {showFilterForm, mobileMenuOnViewChange} = props;
    const location = useLocation();

    return (
        <div className="MainHeaderNavbar flex-space-between">
            <div className='desktop-header-links-wrapper'>
                <MainHeaderLinks/>
            </div>
            {
                pathsAccess.enableFilterForm.includes(location.pathname)
                    ? <svg className='filter-active-icon' onClick={showFilterForm}>
                        <use href='#filter-active'/>
                    </svg>
                    : <svg className='filter-hidden-icon'>
                        <use href='#filter-hidden'/>
                    </svg>
            }
            <svg className='menu-icon' onClick={mobileMenuOnViewChange}>
                <use href='#burger'/>
            </svg>
        </div>
    );
}

export default MainHeaderNavbar;
