import React from "react";
import Header from './components/Header';
import SideBar from './components/SideBar';
import "./index.css";


function App() {
    const category = [
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
        },
        {
            value: 'category=appliances',
            title: 'Appliances',
        },
        {
            value: 'category=audio',
            title: 'Audio',
        }
    ];

    const brand = [
        {
            value: 'brand=insigni',
            title: 'Insigni',
        },
        {
            value: 'brand=samsung',
            title: 'Samsung',
        },
        {
            value: 'brand=apple',
            title: 'Apple',
        }
    ];

    const priceSlider = {
        min: 53,
        max: 85000,
        formatValue: value => value + '₴',
        filterName: "Price",
    };

  return (
    <>
        <Header />
        <SideBar
            filters = {[category,brand]}
            sliders = {[priceSlider]}
        />
    </>
  );
}

export default App;
