import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useState} from "react";
import {useFormWithValidation} from "../../utils/validation";

function SearchForm({
                        onSearch,
                        onCheckbox,
                        searchQuery,
                        isShortFilms,
                    }) {

    const [isFocused, setFocused] = useState(false)

    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    const {
        values,
        handleChange,
    } = useFormWithValidation();

    function handleSearchFormClick(e) {
        e.preventDefault();
        onSearch(values.films || searchQuery);
    }

    return (
        <section className='search-form'>
            <div className="search-form__content">
                <form className='search-form__form' onSubmit={handleSearchFormClick} noValidate>
                    <div className='search-form__input-block'>
                        <input className='search-form__input' type='text' placeholder='Фильм'
                               id="films"
                               name="films"
                               onFocus={onFocus}
                               onBlur={onBlur}
                               defaultValue={searchQuery || ''}
                               onChange={handleChange}
                               required/>
                        <button className='search-form__button' type="submit"/>
                    </div>
                    <div className={`search-form__line ${isFocused && "search-form__line_active" }`} ></div>
                    <FilterCheckbox
                        onCheckbox={onCheckbox}
                        isChecked={isShortFilms}
                    />
                </form>
            </div>
        </section>
    );
}

export default SearchForm;
