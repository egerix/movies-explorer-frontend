import './NavTabs.css';
import {Link} from 'react-router-dom';

export default function NavTabs() {

    return (
        <nav className='nav-tabs'>
            <ul className='nav-tabs__items'>
                <li className="nav-tabs__item">
                    <Link to='/movies' className='nav-tabs__link'>
                        Фильмы
                    </Link>
                </li>
                <li className="nav-tabs__item">
                    <Link to='/saved-movies' className='nav-tabs__link'>
                        Сохраненные фильмы
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
