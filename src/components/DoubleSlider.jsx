import React, { useState, useRef, useEffect} from 'react';
import "./styles/doubleSlider.css";
import getSubElements from "../functions/getSubElements";

const DoubleSlider = (props) => {
    const {filterName, formatValue, min, max,precision} = props;
    const [selected, setSelected] = useState({
        from: min,
        to: max
    });

    const parent = useRef();
    let subElements = null;
    let shift = null;

    useEffect(() => {
        getSubElementsAfterMount(parent.current);
    },[selected]);

    const getSubElementsAfterMount = (parent) => {
        const data = getSubElements(parent);
        subElements = data;
    };

    const onMouseDown = (event) => {
        shift = event.clientX;

        if(event.target.classList === subElements.thumbLeft.classList){
            document.addEventListener("mousemove",onMouseMoveLeftThumb);
        }

        if(event.target.classList === subElements.thumbRight.classList){
            document.addEventListener("mousemove",onMouseMoveRightThumb);
        }

        document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMoveLeftThumb = (event) => {
        const {slider, thumbLeft,thumbRight, progress} = subElements;
        const rightEdge = thumbRight.offsetLeft;
        let newLeft = ((selected.from - min)/(max - min)) * slider.offsetWidth + event.clientX - shift;

        if (newLeft < 0) {
            newLeft = 0;
        }

        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        thumbLeft.style.left =   newLeft + 'px';
        progress.style.left =   newLeft + 'px';

        const from = Math.round((newLeft / slider.offsetWidth * (max - min) + min) * Math.pow(10,precision)) / Math.pow(10,precision);
        const to = Math.round((rightEdge / slider.offsetWidth * (max - min) + min) * Math.pow(10,precision)) /Math.pow(10,precision);

        updateRange(from, to);
    };

    const onMouseMoveRightThumb = (event) => {
        const {slider, thumbLeft, thumbRight, progress} = subElements;
        const leftEdge = thumbLeft.offsetLeft;
        const thumbWidth = thumbLeft.offsetWidth;

        let newRight = ((max - selected.to)/(max - min)) * slider.offsetWidth - event.clientX + shift;

        if (newRight <= 0) {
            newRight = 0;
        }

        if (slider.offsetWidth - newRight < leftEdge + thumbWidth) {
            newRight = slider.offsetWidth - leftEdge - thumbWidth ;
        }

        thumbRight.style.right =   newRight + 'px';
        progress.style.right =   newRight + 'px';

        const from = Math.round(((leftEdge + thumbWidth) / slider.offsetWidth * (max - min) + min)
            * Math.pow(10,precision)) / Math.pow(10,precision);
        const to = Math.round((newRight / slider.offsetWidth * ( min - max) + max)
            * Math.pow(10,precision)) / Math.pow(10,precision);

        updateRange(from, to);
    };

    const updateRange = (from,to) => {
        subElements.from.innerHTML = formatValue(from);
        subElements.to.innerHTML = formatValue(to);
    };

    const onMouseUp = () => {
        const {slider, thumbLeft, thumbRight} = subElements;

        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove',onMouseMoveLeftThumb);
        document.removeEventListener('mousemove', onMouseMoveRightThumb);

        const from = Math.round(((thumbLeft.offsetLeft + 6) / slider.offsetWidth * (max - min) + min)
            * Math.pow(10,precision)) / Math.pow(10,precision);
        const to = Math.round((thumbRight.offsetLeft / slider.offsetWidth * (max - min) + min)
            * Math.pow(10,precision)) / Math.pow(10,precision);
        setSelected({from,to});
        shift = null;
    };

    return(
        <div className="filters__item">
            <h3 className="filters__list-name">{filterName}</h3>
            <div className="filters__list">
                <div ref={parent} className="range-slider">
                    <span data-element="from">{formatValue(selected.from)}</span>
                    <div className="range-slider__inner" data-element="slider">
                        <span
                            className="range-slider__progress"
                            data-element="progress"
                        >
                        </span>
                        <span
                            className="range-slider__thumb-left"
                            data-element="thumbLeft"
                            onMouseDown={event => onMouseDown(event)}
                        >
                        </span>
                        <span
                            className="range-slider__thumb-right"
                            data-element="thumbRight"
                            onMouseDown={event => onMouseDown(event)}
                        >
                        </span>
                    </div>
                    <span data-element="to">{formatValue(selected.to)}</span>
                </div>
            </div>
        </div>
    );
};

export default DoubleSlider;