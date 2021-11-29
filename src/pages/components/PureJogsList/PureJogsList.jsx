import React from 'react';
import './PureJogsList.scss';
import {Link} from "react-router-dom";
import paths from "../../../config/router/paths";

const PureJogsList = () => (
    <div className="PureJogsList">
        <svg className='icon'>
            <use href='#no-jogs-icon'/>
        </svg>
        <p className='label'>Nothing is there</p>
        <Link to={paths.newJog}>
            <button className="btn">Create your jog first</button>
        </Link>
    </div>
);

export default PureJogsList;
