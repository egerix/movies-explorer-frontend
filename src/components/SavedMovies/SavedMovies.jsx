import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({onBurgerMenuClick}) {
    return (
        <section className='saved-movies'>
            <Header color='gray' showTabs={true} onBurgerMenuClick={onBurgerMenuClick}/>
            <SearchForm/>
            <MoviesCardList count={3} savedMode={true}/>
            <Footer/>
        </section>
    );
}

export default SavedMovies;
