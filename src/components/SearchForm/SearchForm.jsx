import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

    return (
        <section className='search-form'>
            <div className="search-form__content">
                <form className='search-form__form'>
                    <div className='search-form__input-block'>
                        <input className='search-form__input' type='text' placeholder='Фильм' required/>
                        <button className='search-form__button'/>
                    </div>
                    <div className="search-form__line"></div>
                    <FilterCheckbox/>
                </form>
            </div>
        </section>
    );
}

export default SearchForm;
