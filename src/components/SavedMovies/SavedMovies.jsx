import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
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
        <section className='saved-movies'>
            <Header color='gray' onBurgerMenuClick={onBurgerMenuClick}/>
            <SearchForm
                searchQuery={searchQuery}
                isShortFilms={isShortFilms}
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
