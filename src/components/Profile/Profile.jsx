import './Profile.css';
import Header from '../Header/Header';
import {useContext, useEffect, useState} from "react";
import {useFormWithValidation} from "../../utils/validation";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile({onEditSubmit, onBurgerMenuClick, onSignOutClick, responseInfo}) {
    const currentUser = useContext(CurrentUserContext);

    const [isEditing, setIsEditing] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const {
        errors,
        values,
        isValid,
        handleChange,
        resetForm,
    } = useFormWithValidation();

    function handleEditClick() {
        values.email = currentUser.email;
        values.name = currentUser.name;
        setIsEditing(true)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onEditSubmit({
            email: values.email,
            name: values.name,
        });
    }

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    useEffect(() => {
        let isDisabled = !isValid || (values.email === currentUser.email && values.name === currentUser.name)
        setIsDisabled(isDisabled);
    }, [currentUser, isValid, values]);

    return (
        <div className='profile'>
            <Header onBurgerMenuClick={onBurgerMenuClick}/>
            <form className='profile__form' onSubmit={handleSubmit} noValidate>
                <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                <div className='profile__fieldset'>
                    <p className='profile__input-error'>{errors.name || ''}</p>
                    <div className='profile__field profile__field_first'>
                        <label className='profile__name'>Имя</label>
                        <input
                            className='profile__input'
                            disabled={!isEditing}
                            name='name'
                            id='name'
                            type='text'
                            placeholder={currentUser.name}
                            minLength="3"
                            maxLength="20"
                            pattern="[a-zA-Zа-яА-ЯёЁ\-\s]*"
                            value={values.name || ''}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className='profile__field'>
                        <label className='profile__name'>E-mail</label>
                        <input
                            className='profile__input'
                            disabled={!isEditing}
                            name='email'
                            id='email'
                            type='email'
                            pattern="\S+@\S+\.\S+"
                            placeholder={currentUser.email}
                            value={values.email || ''}
                            onChange={handleChange}
                            required/>
                    </div>
                    <p className='profile__input-error'>{errors.email || ''}</p>
                </div>
                {isEditing &&
                    <>
                        <p className={`profile__api-info ${responseInfo.isError
                            ? 'profile__api-info_err'
                            : 'profile__api-info_msg'}`}>{responseInfo.message || ''}</p>
                        <button
                            className={`profile__submit-btn ${isDisabled ? 'profile__submit-btn_disabled' : ''}`}
                            disabled={isDisabled}
                            type='submit'>
                            Сохранить
                        </button>
                    </>
                }
            </form>
            {!isEditing &&
                <>
                    <button className='profile__edit-btn' type="button" onClick={handleEditClick}>
                        Редактировать
                    </button>
                    <button className='profile__link' type="button" onClick={onSignOutClick}>
                        Выйти из аккаунта
                    </button>
                </>
            }
        </div>
    );
}

export default Profile;
