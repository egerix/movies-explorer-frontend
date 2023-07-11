import photo from '../../images/me.png'
import './AboutMe.css';
import SectionTitle from "../SectionTitle/SectionTitle";

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__content">
                <SectionTitle text='Студент'/>
                <div className="about-me__info">
                    <div className="about-me__description">
                        <h3 className="about-me__name">
                            Егор
                        </h3>
                        <p className="about-me__profession">
                            SDET, 33 года
                        </p>
                        <p className="about-me__about">
                            Я родился в Перми но живу в Санкт-Петербурге, закончил физико-математический факультет ПГУ.
                            У
                            меня есть жена
                            и дочь. Я люблю слушать музыку. С 2011 работаю на различных позициях в сфере QA. В данный
                            момент
                            прохожу курс фронтенд-разботки на Яндекс Практикуме.
                        </p>
                        <a className="about-me__link" href="https://github.com/egerix">
                            Github
                        </a>
                    </div>
                    <img className="about-me__photo" src={photo} alt="Иванов Егор"/>
                </div>
            </div>
        </section>
    )
}
