import React from 'react';
import SideBar from './SideBar';
import ItemListContainer from './ItemListContainer';

const Catalog = () => {

return(
    <section className="catalog" data-element="catalog">
        <SideBar/>
        <ItemListContainer/>
    </section>
    )
};

export default Catalog;