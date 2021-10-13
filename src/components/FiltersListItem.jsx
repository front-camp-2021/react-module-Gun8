import React from 'react';

const FiltersListItem = (props) => {
    const {value,title} = props.item;
    const {onCheck} = props;
    return(
        <li className="filters__list-item">
            <div>
                <input type="checkbox"
                       value={value.split("=")[1]}
                       name={value.split("=")[0]}
                       id={value.split("=")[1]}
                       onChange={event => onCheck(event)}>
                </input>
                    <label htmlFor={value.split("=")[1]}>
                        <span className="filters__checkbox">
                        </span>
                        <span className="filters__val">{title}</span>
                    </label>
            </div>
        </li>
    );
};

export default FiltersListItem;