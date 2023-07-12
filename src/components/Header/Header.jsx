import './Header.css';
import Navigation from "../Navigation/Navigation";
import LogoLink from "../Logo/Logo";
import NavTabs from "../NavTabs/NavTabs";

export default function Header({color, showTabs, onBurgerMenuClick}) {
    return (
        <header className={`header header_${color}`}>
            <div className="header__content">
                <div className="header__logo">
                    <LogoLink/>
                </div>
                <div className="header__center">
                    {showTabs && (
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
