import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ItemListHeader from './ItemListHeader';
import Search from './Search';
import CardList from './CardList';
import {filterProducts} from "../redux";

const ItemListContainer = () => {
    const products = useSelector(state => state.products);
    const filters = useSelector(state => state.filters);
    const sliders = useSelector(state => state.sliders);
    const search = useSelector(state => state.search);
    const filteredProducts = useSelector(state => state.filteredProducts.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if(products.data.length === 0 || sliders === {} || filters.data === {}) return;
        const checked = {
            brands: [],
            categories: []
        };

        Object.entries(filters.data).forEach(([key,value]) => value.forEach(item => {
            if(item.checked) checked[key].push(item.value.split("=")[1].toLowerCase());
        }));

        Object.entries(checked).forEach(([key,value]) => {
            if(value.length === 0) checked[key] = filters.data[key].map(filter => filter.value.split("=")[1].toLowerCase());
        });

        const data = products.data.filter(product =>
            product.price >= sliders.price.selected.from
            && product.price <= sliders.price.selected.to
            && checked.categories.includes(product.category)
            && checked.brands.includes(product.brand)
            && product.title.toLowerCase().includes(search.value.toLowerCase())
        );
        dispatch(filterProducts(data));
    },[filters, sliders, search]);

  return(
      <div className="item-list-container" data-element="container">
          <ItemListHeader/>
          <Search/>
          <CardList products = {filteredProducts}/>
      </div>
  )
};

export default ItemListContainer;
