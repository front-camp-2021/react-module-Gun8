import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const {data = []} = props;

    return(
        <div className="item-list" data-element="cards">
            {data.map((item, index) => <Card data = {item} key = {index}/>)}
        </div>
    )
};

export default CardList;