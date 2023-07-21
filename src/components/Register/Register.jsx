import './Register.css';
import {Link} from 'react-router-dom';
import Logo from "../Logo/Logo";
import {useFormWithValidation} from "../../utils/validation";
import {useEffect} from "react";

function Register({onRegisterSubmit, responseInfo}) {

    const {
        errors,
        values,
        isValid,
        handleChange,
        resetForm,
    } = useFormWithValidation();

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    function handleSubmit(e) {
        e.preventDefault();
        onRegisterSubmit({
            email: values.email,
            password: values.password,
            name: values.name,
        });
    }

    return (
        <div className='register'>
            <div className='register__header'>
                <Logo/>
            </div>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form' onSubmit={handleSubmit} noValidate>
                <div className='register__field'>
                    <label className='register__field-name'>Имя</label>
                    <input
                        className={`register__input ${errors.name ? 'register__input_invalid' : ''}`}
                        name='name'
                        id='name'
                        type='text'
                        placeholder='Имя'
                        minLength="3"
                        maxLength="20"
                        pattern="[a-zA-Zа-яА-ЯёЁ\-\s]*"
                        defaultValue={values.name || ''}
                        onChange={handleChange}
                        required/>
                    <span className='register__input-error'>{errors.name || ''}</span>
                </div>
                <div className='register__field'>
                    <label className='register__field-name'>E-mail</label>
                    <input
                        className={`register__input ${errors.email ? 'register__input_invalid' : ''}`}
                        name='email'
                        id='email'
                        type='email'
                        placeholder='pochta@yandex.ru'
                        pattern="\S+@\S+\.\S+"
                        value={values.email || ''}
                        onChange={handleChange}
                        required/>
                    <span className='register__input-error'>{errors.email || ''}</span>
                </div>
                <div className='register__field'>
                    <label className='register__field-name'>Пароль</label>
                    <input
                        className={`register__input ${errors.password ? 'register__input_invalid' : ''}`}
                        name='password'
                        minLength="3"
                        maxLength="20"
                        id='password'
                        type='password'
                        placeholder='****'
                        value={values.password || ''}
                        onChange={handleChange}
                        required/>
                    <span className='register__input-error'>{errors.password || ''}</span>
                </div>
                <p className='register__api-error'>{responseInfo.isError ? responseInfo.message : ''}</p>
                <button
                    className={`register__button ${!isValid && errors ? 'register__button_disabled' : ''}`}
                    disabled={!isValid}
                    type='submit'>
                    Зарегистрироваться
                </button>
            </form>
            <div className='register__registered'>
                <p className='register__register-text'>Уже зарегистрированы?</p>
                <Link className='register__register-link' to='/signin'>
                    Войти
                </Link>
            </div>
        </div>
    );
}

export default Register;
