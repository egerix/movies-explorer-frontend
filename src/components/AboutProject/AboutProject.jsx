import './AboutProject.css';
import SectionTitle from "../SectionTitle/SectionTitle";

export default function AboutProject() {
    return (
        <section className='about-project'>
            <div className="about-project__content">
                <SectionTitle text='О проекте'/>
                <div className='about-project__description'>
                    <div className='about-project__column'>
                        <h3 className='about-project__column-title'>
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className='about-project__column-description'>
                            Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className='about-project__column'>
                        <h3 className='about-project__column-title'>
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className='about-project__column-description'>
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                            соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className='about-project__timeline'>
                    <div className='about-project__stages'>
                        <div className='about-project__stage-time about-project__stage-time_completed'>1 неделя</div>
                        <p className='about-project__stage-desc'>Back-end</p>
                    </div>
                    <div className='about-project__plan-info '>
                        <div className='about-project__stage-time'>4 недели</div>
                        <p className='about-project__stage-desc'>Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
