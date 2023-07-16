import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {moviesHasMovie} from "../../utils/movies";
import savedMovies from "../SavedMovies/SavedMovies";

function Movies({
                    onBurgerMenuClick,
                    movies,
                    savedMovies,
                    searchQuery,
                    isShortFilms,
                    onSearch,
                    onCheckbox,
                    onDelete,
                    onSave,
                }) {

    return (
        <section className='movies'>
            <Header color='gray' onBurgerMenuClick={onBurgerMenuClick}/>
            <SearchForm
                searchQuery={searchQuery}
                isShortFilms={isShortFilms}
                onSearch={onSearch}
                onCheckbox={onCheckbox}/>
            <MoviesCardList
                isSavedMode={false}
                movies={movies}
                savedMovies={savedMovies}
                onSave={onSave}
                onDelete={onDelete}
            />
            <Footer/>
        </section>
    );
}

export default Movies;
