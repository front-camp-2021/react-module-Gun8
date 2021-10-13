import React from "react";
import Header from './components/Header';
import DoubleSlider from './components/DoubleSlider';
import FiltersList from './components/FiltersList';
import "./index.css";


function App() {
    const list = [
        {
            value: 'category=cell_phones',
            title: 'Cell Phones',
        },
        {
            value: 'category=computer_tablets',
            title: 'Computers & Tablets',
        },
        {
            value: 'category=cell_phones_accessories',
            title: 'Cell Phone Accessories',
        }
    ]

  return (
    <>
        <Header />
        <DoubleSlider
            filterName = "Price"
            formatValue = {value => value + "₴"}
            min = {53}
            max = {85000}
            precision = {0}
        />
        <FiltersList
            title = "Category"
            list = {list}
        />
    </>
  );
}

export default App;
