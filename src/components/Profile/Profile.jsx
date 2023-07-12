import './Profile.css';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import {useState} from "react";

function Profile({onBurgerMenuClick}) {

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {

        setIsEditing(true)
    }

    return (
        <div className='profile'>
            <Header showTabs={true} onBurgerMenuClick={onBurgerMenuClick}/>
            <form className='profile__form'>
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <fieldset className='profile__fieldset'>
                    <div className='profile__field profile__field_first'>
                        <label className='profile__name'>Имя</label>
                        <input className='profile__input' disabled={!isEditing} type='text' placeholder='Виталий'
                               minLength="3" maxLength="20"
                               required/>
                    </div>
                    <div className='profile__field'>
                        <label className='profile__name'>E-mail</label>
                        <input className='profile__input' disabled={!isEditing} type='email'
                               placeholder='pochta@yandex.ru' required/>
                    </div>
                </fieldset>
                {isEditing &&
                    <button className='profile__submit-btn' type='submit' onClick={handleEditClick}>
                        Сохранить
                    </button>
                }
            </form>
            {!isEditing &&
                <>
                    <button className='profile__edit-btn' type="button" onClick={handleEditClick}>
                        Редактировать
                    </button>
                    <Link to='/' className='profile__link'>
                        Выйти из аккаунта
                    </Link>
                </>
            }
        </div>
    );
}

export default Profile;
