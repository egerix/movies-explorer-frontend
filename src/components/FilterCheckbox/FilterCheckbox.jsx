import "./FilterCheckbox.css";
import {useState} from "react";

const FilterCheckbox = () => {

    const [isCheckBoxActive, setCheckBoxActive] = useState(false);

    const handleOnClick = () => {
        setCheckBoxActive(!isCheckBoxActive);
    };

    return (
        <div className="filter-checkbox">
            <div className="filter-checkbox__switcher" onClick={handleOnClick}>
                <div className={`filter-checkbox__switcher-circle ${isCheckBoxActive ?
                    "filter-checkbox__switcher-circle_active" : ""}`}>
                </div>
            </div>
            <p className="filter-checkbox__title">Короткометражки</p>
        </div>
    );
};

export default FilterCheckbox;
