import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({count, savedMode}) {
    return (
        <section className='movies-section'>
            <ul className="movies-section__cards">
                {[...Array(count)].map((x, i) =>
                    <MoviesCard key={i} savedMode={savedMode}/>
                )}
            </ul>
            {count >= 5 && <button className='movies-section__more-button'>Ещё</button>}
        </section>
    );
}

export default MoviesCardList;
