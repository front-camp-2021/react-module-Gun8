import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const linksHistory = props.linksHistory;

    return(
        <header className="header">
            <div className="logo">
                <img className="logo__img" src="img/logo.png" alt="logo"/>
                <h1 className="logo__name">Online Store</h1>
            </div>
            <ul className="breadcrumb">

                    <li className="breadcrumb__item"><Link to='/'><a href="#"><img src="img/home.svg" alt="home"/></a></Link></li>

                {linksHistory.splice(0, linksHistory.length - 1).map(name =>
                    <li className="breadcrumb__item"><a href="#">{name}</a></li>
                )}
                <li className="breadcrumb__item breadcrumb__item_cur-page">
                    <a href="#">
                    {linksHistory[linksHistory.length - 1]}
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;