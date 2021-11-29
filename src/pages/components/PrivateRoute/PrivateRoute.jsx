import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import './PrivateRoute.scss';
import paths from "../../../config/router/paths";

const PrivateRoute = (props) => {
    const {token, Component} = props;
    const WrappedComponent = token => {
        const navigate = useNavigate();
        useEffect(() => {
            if (!token) {
                navigate(paths.letIn);
            }
        }, [])

        return <Component token={token}/>;
    }
    return WrappedComponent(token);
}

export default PrivateRoute;
