import {Link, NavLink, useNavigate} from 'react-router-dom';
import './NotFound.css';

function NotFound() {

    const navigate = useNavigate();

    function handleBackClick() {
        navigate(-1);
    }

    return (
        <section className='not-found'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__subtitle'>Страница не найдена</p>
            <button className='not-found__back-btn' onClick={handleBackClick}>
                Назад
            </button>
        </section>
    );
}

export default NotFound;
