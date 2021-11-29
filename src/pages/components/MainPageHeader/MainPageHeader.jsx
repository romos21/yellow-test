import React, {useState} from 'react';
import './MainPageHeader.scss';
import JogFilterForm from "../../containers/JogFilterForm/JogFilterForm";
import MainHeaderNavbar from "../MainHeaderNavbar/MainHeaderNavbar";
import MainHeaderLinks from "../MainHeaderLinks/MainHeaderLinks";

const MainPageHeader = (props) => {
    const {token} = props;
    const [isFilterFormViewed, setIsFilterFormViewed] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false);


    const showFilterForm = () => setIsFilterFormViewed(!isFilterFormViewed);

    const mobileMenuOnViewChange = () => setIsMenuOpened(!isMenuOpened);

    return (
        <section className='MainPageHeader'>
            <header className="flex-space-between">
                <svg className="logo-icon">
                    <use href="#logo"/>
                </svg>
                {
                    token &&
                    <MainHeaderNavbar
                        showFilterForm={showFilterForm}
                        mobileMenuOnViewChange={mobileMenuOnViewChange}
                        isMenuOpened={isMenuOpened}
                        isMobile={false}
                    />
                }
            </header>
            {isFilterFormViewed && <JogFilterForm token={token}/>}
            {isMenuOpened && <MainHeaderLinks isMobile={true} mobileMenuOnViewChange={mobileMenuOnViewChange}/>}
        </section>
    )
};

export default MainPageHeader;
