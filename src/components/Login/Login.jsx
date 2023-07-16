import './Login.css';
import {Link} from 'react-router-dom';
import Logo from "../Logo/Logo";
import {useFormWithValidation} from "../../utils/validation";
import {useEffect} from "react";

function Login({onLoginSubmit, apiError}) {

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
        onLoginSubmit({
            email: values.email,
            password: values.password,
        });
    }

    return (
        <div className='login'>
            <div className='login__header'>
                <Logo/>
            </div>
            <h1 className='login__title'>Рады видеть!</h1>
            <form className='login__form' onSubmit={handleSubmit} noValidate>
                <div className='login__field'>
                    <label className='login__field-name'>E-mail</label>
                    <input className='login__input'
                           name='email'
                           id='email'
                           type='email'
                           placeholder='pochta@yandex.ru'
                           value={values.email || ''}
                           onChange={handleChange}
                           required/>
                    <span className='login__input-error'>{errors.email || ''}</span>
                </div>
                <div className='login__field'>
                    <label className='login__field-name'>Пароль</label>
                    <input className='login__input'
                           name='password'
                           id='password'
                           type='password'
                           minLength="3"
                           maxLength="20"
                           placeholder='****'
                           value={values.password || ''}
                           onChange={handleChange}
                           required/>
                    <span className='login__input-error'>{errors.password || ''}</span>
                </div>
                <p className='login__api-error'>{apiError || ''}</p>
                <button className={`login__button ${!isValid && errors ? 'login__button_disabled' : ''}`}
                        disabled={!isValid}
                        type='submit'>
                    Войти
                </button>
            </form>
            <div className='login__unregistered'>
                <p className='login__register-text'>Еще не зарегистрированы?</p>
                <Link className='login__register-link' to='/signup'>
                    Регистрация
                </Link>
            </div>
        </div>
    );
}

export default Login;
