import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useState} from "react";

function SearchForm() {

    const [isFocused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    return (
        <section className='search-form'>
            <div className="search-form__content">
                <form className='search-form__form'>
                    <div className='search-form__input-block'>
                        <input className='search-form__input' type='text' placeholder='Фильм' onFocus={onFocus} onBlur={onBlur} required/>
                        <button className='search-form__button' type="button"/>
                    </div>
                    <div className={`search-form__line ${isFocused && "search-form__line_active" }`} ></div>
                    <FilterCheckbox/>
                </form>
            </div>
        </section>
    );
}

export default SearchForm;
