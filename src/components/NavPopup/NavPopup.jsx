import "./NavPopup.css";
import {Link, NavLink} from "react-router-dom";
import accountImg from "../../images/account.svg";

const NavPopup = ({isPopupOpened, onPopupCloseClick}) => {

    const linkClass = ({isActive}) => `nav-popup__link ${isActive ? 'nav-popup__link_active' : ''} `

    return (
        <div className={`nav-popup ${isPopupOpened ? "nav-popup_opened" : ""}`}>
            <div className="nav-popup__content">
                <button className="nav-popup__exit-btn" type="button" onClick={() => onPopupCloseClick()}/>
                <nav className="nav-popup__links">
                    <NavLink to="/" className={linkClass}>
                        Главная
                    </NavLink>
                    <NavLink to="/movies" className={linkClass}>
                        Фильмы
                    </NavLink>
                    <NavLink to="/saved-movies" className={linkClass}>
                        Сохранённые&nbsp;фильмы
                    </NavLink>

                    <div className="nav-popup__account">
                        <Link to="/profile" className="nav-popup__account-link">
                            Аккаунт
                        </Link>
                        <img className='nav-popup__icon' src={accountImg} alt='аккаунт'/>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavPopup;
