import "./FilterCheckbox.css";
import {useEffect, useState} from "react";

function FilterCheckbox({onCheckbox, isChecked}) {

    const [isCheckBoxActive, setCheckBoxActive] = useState(isChecked);

    const handleOnClick = () => {
        setCheckBoxActive(!isCheckBoxActive);
    };

    useEffect(() => onCheckbox(isCheckBoxActive),
        [isCheckBoxActive])

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
}

export default FilterCheckbox;
