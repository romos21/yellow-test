import React, {useEffect, useState} from 'react';
import './JogPage.scss';
import {useParams, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import paths from "../../../config/router/paths";
import JogForm from "../JogForm/JogForm";

const JogPage = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const {jogsList, token} = props;
    const [jog, setJog] = useState(null);

    useEffect(() => {
        if (!jogsList.length) {
            return navigate(paths.jogs);
        }
        const currentJogData = jogsList.find(jog => jog.id === Number(params.id));
        setJog(currentJogData);
    }, []);

    return jog && (<JogForm token={token} jog={jog} buttonText="Update" actionType="put"/>);
}

const mapStateToProps = ({jogs}) => {
    return {
        jogsList: jogs.list,
    }
}

export default connect(mapStateToProps, null)(JogPage);
