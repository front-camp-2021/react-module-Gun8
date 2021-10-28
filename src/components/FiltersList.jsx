import React from 'react';
import {useDispatch} from 'react-redux';
import FiltersListItem from "./FiltersListItem";
import {checkField} from "../redux/filters/filtersActions";

const FiltersList = (props) => {
    const {title = "", list = []} = props;
    const dispatch = useDispatch();

    return(
        <div className="filters__item">
            <h3 className="filters__list-name">{title}</h3>
            <ul className="filters__list">
                {list.map((item, index) => {
                    return <FiltersListItem
                        item = {item}
                        key = {item.value}
                        onCheck = {() => {dispatch(checkField({
                            index,
                            name: item.value.split("=")[0]
                        }))}}
                    />
                })}
            </ul>
        </div>
    );
};

export default FiltersList;