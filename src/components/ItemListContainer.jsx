import React from 'react';
import ItemListHeader from './ItemListHeader';
import Search from './Search';
import CardList from './CardList';

const ItemListContainer = () => {
  return(
      <div className="item-list-container" data-element="container">
          <ItemListHeader/>
          <Search/>
          <CardList/>
      </div>
  )
};

export default ItemListContainer;
