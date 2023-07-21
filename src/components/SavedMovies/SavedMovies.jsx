import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useEffect, useState} from "react";
import {localStorageNames} from "../../utils/config";

function SavedMovies({
                         onBurgerMenuClick,
                         movies,
                         savedMovies,
                         onSearch,
                         onDelete,
                         onSave,
                     }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [isShortFilms, setIsShortFilms] = useState(false);

    function handleSearch({ searchQuery, isShortFilms }) {
        setSearchQuery(searchQuery)
        setIsShortFilms(isShortFilms)
        onSearch({ searchQuery, isShortFilms })
    }

    useEffect(() => {
        onSearch({searchQuery, isShortFilms })
    }, [])

    return (
        <section className='saved-movies'>
            <Header color='gray' onBurgerMenuClick={onBurgerMenuClick}/>
            <SearchForm
                searchQuery={''}
                isShortFilms={false}
                onSearch={handleSearch}
            />
            <MoviesCardList
                isSavedMode={true}
                movies={movies}
                savedMovies={savedMovies}
                onSave={onSave}
                onDelete={onDelete}
            />
            <Footer/>
        </section>
    );
}

export default SavedMovies;
