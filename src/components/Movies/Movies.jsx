import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useState} from "react";
import {localStorageNames} from "../../utils/config";

function Movies({
                    onBurgerMenuClick,
                    movies,
                    savedMovies,
                    onSearch,
                    onDelete,
                    onSave,
                }) {

    const [searchQuery, setSearchQuery] = useState(() => localStorage.getItem(localStorageNames.searchQuery) || '');
    const [isShortFilms, setIsShortFilms] = useState(() => JSON.parse(localStorage.getItem(localStorageNames.isShortFilms) || false));

    function handleSearch({searchQuery, isShortFilms}) {
        setSearchQuery(searchQuery)
        setIsShortFilms(isShortFilms)
        localStorage.setItem(localStorageNames.isShortFilms, isShortFilms.toString())
        localStorage.setItem(localStorageNames.searchQuery, searchQuery.toString())
        onSearch({searchQuery, isShortFilms})
    }

    return (
        <section className='movies'>
            <Header color='gray' onBurgerMenuClick={onBurgerMenuClick}/>
            <SearchForm
                searchQuery={searchQuery}
                isShortFilms={isShortFilms}
                onSearch={handleSearch}
            />
            <MoviesCardList
                isSavedMode={false}
                movies={searchQuery ? movies : []}
                savedMovies={savedMovies}
                onSave={onSave}
                onDelete={onDelete}
            />
            <Footer/>
        </section>
    );
}

export default Movies;
