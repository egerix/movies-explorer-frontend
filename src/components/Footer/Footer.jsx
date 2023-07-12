import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__content">
                <h2 className='footer__title'>
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </h2>
                <div className='footer__info'>
                    <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>
                    <nav className='footer__links'>
                        <a className='footer__link' href='https://practicum.yandex.ru' rel='noreferrer' target='_blank'>
                            Яндекс.Практикум
                        </a>
                        <a className='footer__link' href='https://github.com/egerix' rel='noreferrer' target='_blank'>
                            Github
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
