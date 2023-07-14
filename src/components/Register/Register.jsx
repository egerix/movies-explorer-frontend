import './Register.css';
import {Link} from 'react-router-dom';
import Logo from "../Logo/Logo";

function Register() {
    return (
        <div className='register'>
            <div className='register__header'>
                <Logo/>
            </div>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form' noValidate>
                <div className='register__field'>
                    <label className='register__field-name'>Имя</label>
                    <input className='register__input' type="text" placeholder='Виталий'
                           minLength="3" maxLength="20"
                           required/>
                    <span className='register__input-error'></span>
                </div>
                <div className='register__field'>
                    <label className='register__field-name'>E-mail</label>
                    <input className='register__input' name='email' id='email' type='email'
                           placeholder='pochta@yandex.ru' required/>
                    <span className='register__input-error'></span>
                </div>
                <div className='register__field'>
                    <label className='register__field-name'>Пароль</label>
                    <input className='register__input register__input_invalid' defaultValue='000000' name='password'
                           minLength="3" maxLength="20"
                           id='password' type='password' placeholder='****' required/>
                    <span className='register__input-error'>Что-то пошло не так...</span>
                </div>
                <button className='register__button' type='submit'>
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
