import './Header.css';
import Navigation from "../Navigation/Navigation";
import LogoLink from "../Logo/Logo";
import NavTabs from "../NavTabs/NavTabs";
import {useContext} from "react";
import {AuthUserContext} from "../../contexts/AuthUserContext";

export default function Header({color, onBurgerMenuClick}) {
    const {isLoggedIn} = useContext(AuthUserContext);

    return (
        <header className={`header header_${color}`}>
            <div className="header__content">
                <div className="header__logo">
                    <LogoLink/>
                </div>
                <div className="header__center">
                    {isLoggedIn && (
                        <NavTabs/>
                    )}
                </div>
                <div className="header__right">
                    <Navigation onBurgerMenuClick={onBurgerMenuClick}/>
                </div>
            </div>
        </header>
    );
}
