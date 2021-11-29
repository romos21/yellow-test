import React from 'react';
import './LetMeIn.scss';
import userService from '../../../services/user';
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    actions
} from '../../../redux/actions'
import Loader from "../../components/Loader/Loader";
import paths from "../../../config/router/paths";

const LetMeIn = (props) => {
    const {userTokenSet, loader, loaderViewChange} = props;
    const navigate = useNavigate();
    const getToken = async () => {
        loaderViewChange();
        const res = await userService.getUserToken();
        userTokenSet(res['access_token']);
        navigate(paths.jogs);
        loaderViewChange();
    }

    if (loader) {
        return <Loader/>;
    }
    return (
        <div className="LetMeIn common-container">
            <svg className='icon'>
                <use href='#bear-icon'/>
            </svg>
            <button className='btn' onClick={getToken}>Let me in</button>
        </div>
    );
}

const mapStateToProps = ({user, loader}) => {
    return {
        token: user.token,
        loader: loader.isShowLoader,
    }
}

const mapDispatchToProps = {
    userTokenSet: actions.userActions.userTokenSet,
    loaderViewChange: actions.loaderActions.loaderViewChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(LetMeIn);
