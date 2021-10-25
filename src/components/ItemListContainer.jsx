import React from 'react';
import ItemListHeader from './ItemListHeader';
import Search from './Search';
import CardList from './CardList';
import { products } from '../fixtures/products.js'

const ItemListContainer = () => {
  return(
      <div className="item-list-container" data-element="container">
          <ItemListHeader/>
          <Search/>
          <CardList data = {products}/>
      </div>
  )
};

export default ItemListContainer;
