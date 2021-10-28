import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeAllChecks} from '../redux';
import FiltersList from './FiltersList';
import DoubleSlider from './DoubleSlider';

const SideBar = (props) => {
    const filters = useSelector(state => Object.values(state.filters));
    const dispatch = useDispatch();

    const [sliders, setSliders] = useState(props.sliders);

    const updateSlider = (sliderName,selected) => {
        setSliders(sliders.map(item => {
            if(item.filterName === sliderName){
                item.selected = selected;
            }

            return item;
        }));
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
                        min = {slider.min}
                        max = {slider.max}
                        formatValue = {slider.formatValue}
                        filterName = {slider.filterName}
                        precision = {slider.precision}
                        selected = {slider.selected}
                        updateSlider = {updateSlider}
                        key = {index}
                    />
                })}
                {filters.map((list, index) => {
                    const title = list[0].value.split("=")[0].slice(0,1).toUpperCase() + list[0].value.split("=")[0].slice(1);
                    return <FiltersList title = {title} list = {list} key = {index}/>
                })}
            </div>
            <button className="filters__reset-btn" data-element="btn" onClick={() => dispatch(removeAllChecks())}>
                Clear all filters</button>
        </aside>
    );
};

export default SideBar;