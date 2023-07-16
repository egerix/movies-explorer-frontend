import './MoviesCard.css';
import saveButton from '../../images/save.svg';
import savedButton from '../../images/saved.svg';
import removeButton from '../../images/remove.svg';

function MoviesCard({
                        isSaved,
                        isSavedMode,
                        movie,
                        onSave,
                        onDelete,
                    }) {


    const handleOnClick = () => {
        if (isSaved) {
            onDelete(movie)
        } else {
            onSave(movie)
        }
    };

    const formattedTime = (minutes) => {
        const hours = Math.trunc(minutes / 60)
        if (hours > 0)
            return `${hours}ч ${minutes % 60}м`
        else
            return `${minutes}м`
    }

    return (
        <li className='movies-card'>
            <div className='movies-card__content'>
                <div className='movies-card__header'>
                    <h2 className='movies-card__title'>{movie.nameRU}</h2>
                    <p className='movies-card__duration'>{formattedTime(movie.duration)}</p>
                </div>
                <a className='movies-card__link' href={movie.trailerLink} target='_blank' rel='noreferrer'>
                    <img className='movies-card__image' src={movie.image} alt={movie.name}/>
                </a>
                <button className='movies-card__button' type='button' onClick={handleOnClick}
                > {isSaved
                    ? (<img className='movies-card__icon' src={isSavedMode ? removeButton : savedButton}
                            alt='удалить'/>)
                    : (<img className='movies-card__icon' src={saveButton} alt='сохранить'/>)
                }
                </button>
            </div>
        </li>
    );
}

export default MoviesCard;
