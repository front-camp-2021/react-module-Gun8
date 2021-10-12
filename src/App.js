import React from "react";
import Header from './components/Header';
import DoubleSlider from './components/DoubleSlider';
import "./index.css";


function App() {
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
    </>
  );
}

export default App;
