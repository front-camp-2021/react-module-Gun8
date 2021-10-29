import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeAllChecks, resetSlider} from '../redux';
import FiltersList from './FiltersList';
import DoubleSlider from './DoubleSlider';

const SideBar = () => {
    const filters = useSelector(state => Object.values(state.filters));
    const sliders = useSelector(state => Object.values(state.sliders));
    const dispatch = useDispatch();

    const reset = () => {
        const thumbLeft = document.querySelectorAll('.range-slider__thumb-left');
        const thumbRight = document.querySelectorAll('.range-slider__thumb-right');
        const progress = document.querySelectorAll('.range-slider__progress');

        dispatch(removeAllChecks());
        dispatch(resetSlider());

        sliders.map((slider,i) => {
            thumbLeft.item(i).style.left = 0;
            thumbRight.item(i).style.right = 0;
            progress.item(i).style = 'left:0; right:0';
        });
    };

    return (
        <aside className="filters">
            <div className="filters__header">
                <h2 className="filters__name">Filters</h2>
                <button className="filters__hide-btn">
                    <img src="../img/chevrons-left.svg" alt="hide">
                    </img>
                </button>
            </div>
            <div className="filters__content">
                {sliders.map((slider, index) => {
                    return <DoubleSlider
                        slider = {slider}
                        key = {index}
                    />
                })}
                {filters.map((list, index) => {
                    const title = list[0].value.split("=")[0].slice(0,1).toUpperCase() + list[0].value.split("=")[0].slice(1);
                    return <FiltersList title = {title} list = {list} key = {index}/>
                })}
            </div>
            <button className="filters__reset-btn" data-element="btn" onClick={reset}>
                Clear all filters</button>
        </aside>
    );
};

export default SideBar;