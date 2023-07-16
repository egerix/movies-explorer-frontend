import "./FilterCheckbox.css";
import {useState} from "react";

function FilterCheckbox({onCheckbox, isChecked}) {

    const [isCheckBoxActive, setCheckBoxActive] = useState(isChecked);

    const handleOnClick = () => {
        const newState = !isCheckBoxActive;
        onCheckbox(newState);
        setCheckBoxActive(newState);
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
