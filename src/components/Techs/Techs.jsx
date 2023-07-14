import './Techs.css';
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Techs() {
    return (
        <section className='techs' id='techs'>
            <div className="techs__content">
                <SectionTitle text='Технологии'/>
                <h3 className='techs__info'>7 технологий</h3>
                <p className='techs__desc'>
                    На курсе веб-разработки мы освоили технологии, которые применили в
                    дипломном проекте.
                </p>
                <ul className='techs__items'>
                    <li className='techs__item'>HTML</li>
                    <li className='techs__item'>CSS</li>
                    <li className='techs__item'>JS</li>
                    <li className='techs__item'>React</li>
                    <li className='techs__item'>Git</li>
                    <li className='techs__item'>Express.js</li>
                    <li className='techs__item'>momgoDB</li>
                </ul>
            </div>
        </section>
    );
}
