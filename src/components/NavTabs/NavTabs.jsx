import './NavTabs.css';
import {Link, NavLink} from 'react-router-dom';

export default function NavTabs() {

    const linkClass = ({isActive}) => `nav-tabs__link ${isActive ? 'nav-tabs__link_active' : ''} `

    return (
        <nav className='nav-tabs'>
            <ul className='nav-tabs__items'>
                <li className="nav-tabs__item">
                    <NavLink to='/movies' className={linkClass}>
                        Фильмы
                    </NavLink>
                </li>
                <li className="nav-tabs__item">
                    <NavLink to='/saved-movies' className={linkClass}>
                        Сохраненные фильмы
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
