import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeAllChecks, resetSlider, setSliders} from '../redux';
import FiltersList from './FiltersList';
import DoubleSlider from './DoubleSlider';
import {prepareSlider} from "../functions/prepareSlider";

const SideBar = () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const products = useSelector(state => state.products);
    const filters = useSelector(state => state.filters);
    const sliders = useSelector(state => Object.values(state.sliders));
    const dispatch = useDispatch();

    useEffect(() => {
        if(products.data.length !== 0){
            const sliders = {};
            sliders.price = prepareSlider(products.data,'price', value => value + '₴');
            dispatch(setSliders(sliders));
        }
    }, [products]);

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
                {products.loading? '' :
                    sliders.map((slider, index) => {
                    return <DoubleSlider
                        slider = {slider}
                        key = {index}
                    />
                })}
                {filters.loading? '' :
                    Object.values(filters.data).map((list, index) => {
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