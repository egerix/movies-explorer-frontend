import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <div className="portfolio__content">
                <h2 className='portfolio__title'>Портфолио</h2>
                <ul className='portfolio__projects'>
                    <li className='portfolio__project'>
                        <a className='portfolio__link' href='https://github.com/egerix/react-mesto-api-full-gha' rel='noreferrer' target='_blank'>
                            Статичный сайт
                            <p className='portfolio__arrow'>↗</p>
                        </a>
                    </li>
                    <li className='portfolio__project'>
                        <a className='portfolio__link' href='https://github.com/egerix/russian-travel' rel='noreferrer' target='_blank'>
                            Адаптивный сайт
                            <p className='portfolio__arrow'>↗</p>
                        </a>
                    </li>
                    <li className='portfolio__project'>
                        <a className='portfolio__link' href='https://egerix.github.io/mesto/index.html' rel='noreferrer' target='_blank'>
                            Одностраничное приложение
                            <p className='portfolio__arrow'>↗</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
