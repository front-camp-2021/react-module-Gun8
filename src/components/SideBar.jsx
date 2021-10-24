import React, {useState} from 'react';
import FiltersList from './FiltersList';
import DoubleSlider from './DoubleSlider';

const SideBar = (props) => {
    const filters = props.filters;

    const [sliders, setSliders] = useState(props.sliders);

    const reset = () => {
        const thumbLeft = document.querySelectorAll('.range-slider__thumb-left');
        const thumbRight = document.querySelectorAll('.range-slider__thumb-right');
        const progress = document.querySelectorAll('.range-slider__progress');
        const inputs = document.querySelectorAll(".filters__list-item input");

        inputs.forEach((input,i) => {
            inputs.item(i).checked = false;
            inputs.item(i).nextElementSibling.firstElementChild.classList.remove('filters__checkbox_checked');
        });

        setSliders(props.sliders.map((slider,i) => {
            thumbLeft.item(i).style.left = 0;
            thumbRight.item(i).style.right = 0;
            progress.item(i).style = 'left:0; right:0';

            slider.selected = {
                from: slider.min,
                to: slider.max
            };

            return slider;
        }));
    };

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
            <button className="filters__reset-btn" data-element="btn" onClick={reset}>Clear all filters</button>
        </aside>
    );
};

export default SideBar;