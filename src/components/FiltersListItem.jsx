import React from 'react';

const FiltersListItem = (props) => {
    const {value = "",title = "",checked = false} = props.item;
    const {onCheck} = props;


    return(
        <li className="filters__list-item">
                <input type="checkbox"
                       value={value.split("=")[1]}
                       name={value.split("=")[0]}
                       id={value.split("=")[1]}
                       onChange={onCheck}>
                </input>
                    <label htmlFor={value.split("=")[1]}>
                        <span className={`filters__checkbox${checked?" filters__checkbox_checked":""}`}>
                        </span>
                        <span className="filters__val">{title}</span>
                    </label>
        </li>
    );
};

export default FiltersListItem;