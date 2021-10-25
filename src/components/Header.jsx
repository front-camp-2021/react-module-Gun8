const Header = () => {
    return(
        <header className="header">
            <div className="logo">
                <img className="logo__img" src="img/logo.png" alt="logo"/>
                <h1 className="logo__name">Online Store</h1>
            </div>
            <ul className="breadcrumb">
                <li className="breadcrumb__item"><a href="#"><img src="img/home.svg" alt="home"/></a></li>
                <li className="breadcrumb__item"><a href="#">eCommerce</a></li>
                <li className="breadcrumb__item breadcrumb__item_cur-page"><a href="#">Electronics</a></li>
            </ul>
        </header>
    );
};

export default Header;