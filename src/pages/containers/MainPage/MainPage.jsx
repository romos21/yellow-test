import React from 'react';
import {Routes, Navigate, Route} from 'react-router-dom'
import './MainPage.scss';
import MainPageHeader from "../../components/MainPageHeader/MainPageHeader";
import JogsList from "../JogsList/JogsList";
import InfoContent from "../../components/InfoContent/InfoContent";
import JogForm from "../../components/JogForm/JogForm";
import LetMeIn from "../LetMeIn/LetMeIn";
import {connect} from "react-redux";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import paths from "../../../config/router/paths";
import ContactsContent from "../../components/ContactsContent/ContactsContent";
import Icons from "../../components/Icons/Icons";
import JogPage from "../../components/JogPage/JogPage";

const MainPage = (props) => {
    const {token} = props;
    return (
        <>
            <Icons/>
            <MainPageHeader token={token}/>
            <Routes>
                <Route path='/' element={token? <Navigate to={paths.jogs}/> : <Navigate to={paths.letIn}/>}/>
                <Route path={paths.letIn} element={token? <Navigate to={paths.jogs}/> : <LetMeIn token={token}/>}/>
                <Route path={paths.jogs} element={<PrivateRoute token={token} Component={JogsList}/>}/>
                <Route path={`${paths.jogs}/:id`} element={<PrivateRoute token={token} Component={JogPage}/>}/>
                <Route path={paths.newJog} element={<PrivateRoute token={token} Component={JogForm}/>}/>
                <Route path={paths.info} element={<PrivateRoute token={token} Component={InfoContent}/>}/>
                <Route path={paths.contact} element={<PrivateRoute token={token} Component={ContactsContent}/>}/>
            </Routes>
        </>
    );
}

const mapStateToProps = ({user}) => {
    return {
        token: user.token,
    }
}

export default connect(mapStateToProps)(MainPage);
