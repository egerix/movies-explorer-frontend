import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useEffect} from "react";

function SavedMovies({
                         onBurgerMenuClick,
                         movies,
                         savedMovies,
                         onSearch,
                         onCheckbox,
                         onDelete,
                         onSave,
                     }) {


    useEffect(() => {
        onSearch('')
    }, [])

    return (
        <section className='saved-movies'>
            <Header color='gray' onBurgerMenuClick={onBurgerMenuClick}/>
            <SearchForm
                searchQuery={''}
                isShortFilms={false}
                onSearch={onSearch}
                onCheckbox={onCheckbox}/>
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
