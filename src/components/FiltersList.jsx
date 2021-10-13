import React from 'react';
import FiltersListItem from "./FiltersListItem";

const FiltersList = (props) => {
    const {title, list} = props;

    const onCheck = (event) => {
        if(event.target.checked){
            event.target.nextElementSibling.firstElementChild.classList.add("filters__checkbox_checked");
        }
        else{
            event.target.nextElementSibling.firstElementChild.classList.remove("filters__checkbox_checked");
        }
    };

    return(
        <div className="filters__item">
            <h3 className="filters__list-name" data-element="title">{title}</h3>
            <ul className="filters__list" data-element="list">
                {list.map(item => {
                    return <FiltersListItem item = {item} key = {item.value} onCheck = {onCheck}/>
                })}
            </ul>
        </div>
    );
};

export default FiltersList;