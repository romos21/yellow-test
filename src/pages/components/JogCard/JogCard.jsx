import React from 'react';
import './JogCard.scss';
import { format } from "date-fns";

const JogCard = ({jog}) => {

    const jogDateFormatted = format(new Date(jog.date),"dd/MM/yyyy");

    return (
        <div className="RunningCardComponent">
            <svg className='icon'>
                <use href='#icon'/>
            </svg>
            <div className='info'>
                <p>Time: {jog.time} min</p>
                <p>Date: {jogDateFormatted}</p>
                <p>Distance: {jog.distance} km</p>
            </div>
        </div>
    );
}

export default JogCard;
