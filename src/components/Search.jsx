import React from 'react';
import {useDispatch} from 'react-redux';
import {setSearchValue} from '../redux';

const Search = () => {
    const dispatch = useDispatch();

    const handleInput = (func, delay) => {
        let timer;
        return function () {
            if(timer) clearTimeout(timer);
            timer = setTimeout(func,delay);
        }
    };

    const updateSearchValue = () => {
        const search = document.querySelector('.item-list-search input');
        dispatch(setSearchValue(search.value.trim()))
    };

    return(
        <div className="item-list-search">
            <input
                onInput={handleInput(updateSearchValue, 1000)}
                type="text"
                placeholder="Search"
                data-element="input"
            />
            <img src="img/search.svg" alt="search" />
        </div>
    )
};

export default Search;