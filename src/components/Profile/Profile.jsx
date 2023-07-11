import './Profile.css';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

function Profile({onBurgerMenuClick}) {
    return (
        <section className='profile'>
            <Header showTabs={true} onBurgerMenuClick={onBurgerMenuClick}/>
            <form className='profile__form'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <fieldset className='profile__fieldset'>
                    <div className='profile__field profile__field_first'>
                        <p className='profile__name'>Имя</p>
                        <input className='profile__input' type='text' placeholder='Виталий' required/>
                    </div>
                    <div className='profile__field'>
                        <p className='profile__name'>E-mail</p>
                        <input className='profile__input' type='email' placeholder='pochta@yandex.ru' required/>
                    </div>
                </fieldset>
                <button className='profile__edit-btn' type='submit'>
                    Редактировать
                </button>
            </form>
            <Link to='/' className='profile__link'>
                Выйти из аккаунта
            </Link>
        </section>
    );
}

export default Profile;
