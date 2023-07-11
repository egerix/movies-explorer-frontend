import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({onBurgerMenuClick}) {
    return (
        <section className='movies'>
            <Header color='gray' showTabs={true} onBurgerMenuClick={onBurgerMenuClick}/>
            <SearchForm/>
            <MoviesCardList count={5} savedMode={false}/>
            <Footer/>
        </section>
    );
}

export default Movies;
