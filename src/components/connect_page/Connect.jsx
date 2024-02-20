import React from 'react';
import socio_connect_logo from "../../assets/images/socio_connect_logo.png";
import './Connect.css';

export default function Connect() {
    return (
        <div id="connect-component">
            <img src={socio_connect_logo} alt="socio_logo" />
            <div id="buttons">
                <div id='connect-button'>Connect</div>
                <div id="recover-button">Recover</div>
            </div>
        </div>
    )
}
