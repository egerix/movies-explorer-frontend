import './Navigation.css';
import {Link, useLocation} from 'react-router-dom';
import accountImg from '../../images/account.svg'

export default function Navigation({onBurgerMenuClick}) {
    const location = useLocation()

    return (
        <nav className='navigation'>
            <ul className='navigation__items'>
                {location.pathname === '/' && (
                    <>
                        <li className="navigation__item">
                            <Link to='/signup' className='navigation__link'>
                                Регистрация
                            </Link>
                        </li>
                        <li className="navigation__item">
                            <Link to='/signin' className='navigation__link navigation__link_signin'>
                                Войти
                            </Link>
                        </li>
                    </>
                )}
                {(['/movies', '/saved-movies', '/profile'].includes(location.pathname)) && (
                    <li className="navigation__item">
                        <Link to='/profile' className='navigation__link navigation__link_account'>
                            Аккаунт
                            <img className='navigation__account' src={accountImg} alt='аккаунт'/>
                        </Link>
                    </li>
                )}
                {onBurgerMenuClick &&
                    <button type='button' className="navigation__burger" onClick={onBurgerMenuClick}></button>
                }
            </ul>
        </nav>
    );
}
