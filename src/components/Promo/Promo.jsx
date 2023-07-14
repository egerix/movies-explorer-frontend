import './Promo.css';
import logo from '../../images/landing-logo.svg';

export default function Promo() {
    return (
        <section className='promo'>
            <div className="promo__content">
                <h1 className='promo__title'>
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <img className='promo__logo' src={logo} alt='логотип'/>
            </div>
        </section>
    );
}
