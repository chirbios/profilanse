import './header.scss';
import logo from'../../img/logo.svg';

function Header() {
    return(
        <div className="container">
            <div className="header__wrapper">
                <a href="#" className='header__logo'>
                    <img src={logo} alt="logo" />
                </a>
                <div className="header__news"> Новости </div>
                <div className="header__sign-in">Вход / Выход</div>
            </div>
        </div>
    )
}

export default Header;