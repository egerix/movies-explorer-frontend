import {useState} from 'react';
import './MoviesCard.css';
import saveButton from '../../images/save.svg';
import savedButton from '../../images/saved.svg';
import removeButton from '../../images/remove.svg';
import banksy from '../../images/banksy.svg';

function MoviesCard({savedMode}) {

    const [isSaved, setSaved] = useState(savedMode);

    const handleOnClick = () => {
        setSaved(!isSaved);
    };

    return (
        <li className='movies-card'>
            <div className='movies-card__content'>
                <div className='movies-card__header'>
                    <h3 className='movies-card__title'>В погоне за Бенкси</h3>
                    <p className='movies-card__duration'>27 минут</p>
                </div>
                <img className='movies-card__image' src={banksy} alt='В погоне за Бенкси'/>
                <button className='movies-card__button' type='button' onClick={handleOnClick}
                > {isSaved
                    ? (<img className='movies-card__icon' src={savedMode ? removeButton : savedButton} alt='удалить'/>)
                    : (<img className='movies-card__icon' src={saveButton} alt='сохранить'/>)
                }
                </button>
            </div>
        </li>
    );
}

export default MoviesCard;
