import React, {useEffect, useState} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {getLoadMoreParam, moviesHasMovie} from "../../utils/movies";
import {useWindowWidth} from "../../utils/windowWidth";

function MoviesCardList({
                            isSavedMode,
                            movies,
                            savedMovies,
                            onDelete,
                            onSave,
                        }) {
    const width = useWindowWidth();
    const [loadMoreParam, setLoadMoreParam] = useState(() => getLoadMoreParam(width))
    const [loadSize, setLoadSize] = useState(loadMoreParam.init)

    function handleMoreClick() {
        setLoadSize(loadSize + loadMoreParam.more)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadMoreParam(getLoadMoreParam(width))
        }, 1000);
        return () => clearTimeout(timer);
    }, [width])

    return (
        <section className='movies-section'>
            <ul className="movies-section__cards">
                {movies
                    .filter((movie) => !isSavedMode || moviesHasMovie(savedMovies, movie.movieId))
                    .map((movie, movieIndex) => {
                    return (
                        movieIndex < loadSize &&
                        <MoviesCard
                            isSavedMode={isSavedMode}
                            isSaved={isSavedMode || moviesHasMovie(savedMovies, movie.movieId)}
                            movie={movie}
                            key={movie.movieId}
                            onDelete={onDelete}
                            onSave={onSave}
                        />
                    );
                })}
            </ul>
            <div className="movies-section__more">
                {(isSavedMode ? savedMovies : movies).length >= loadSize &&
                    <button className='movies-section__more-button' type="button" onClick={handleMoreClick}>Ещё</button>
                }
            </div>
        </section>
    );
}

export default MoviesCardList;
