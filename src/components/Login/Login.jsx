import './Login.css';
import {Link} from 'react-router-dom';
import Logo from "../Logo/Logo";

function Login() {
    return (
        <div className='login'>
            <div className='login__header'>
                <Logo/>
            </div>
            <h2 className='login__title'>Рады видеть!</h2>
            <form className='login__form' noValidate>
                <div className='login__field'>
                    <p className='login__field-name'>E-mail</p>
                    <input className='login__input' name='email' id='email' type='email' placeholder='pochta@yandex.ru'
                           required/>
                    <span className='login__input-error'></span>
                </div>
                <div className='login__field'>
                    <p className='login__field-name'>Пароль</p>
                    <input className='login__input login__input_invalid' name='password' id='password' type='password'
                           placeholder='' required/>
                    <span className='login__input-error'></span>
                </div>
                <button className='login__button' type='submit'>
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
