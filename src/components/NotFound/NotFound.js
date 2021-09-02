import React from 'react';
import sorry from '../../assets/istockphoto-1161140457-170667a.jpg'
import {Link} from "react-router-dom";
import {NotFoundWrapper} from "./NotFoundStyled";

function NotFound({code, text}) {
    return (
        <NotFoundWrapper>
            <Link to={'/'}>
                <img src={sorry} alt="Not found"/>
                <h3>{code} </h3>
                <span>{text}</span>
            </Link>
        </NotFoundWrapper>
    );
}

export default NotFound;