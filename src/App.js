import React from "react";
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/Header';
import Catalog from './components/Catalog';
import Pagination from './components/Pagination';
import "./index.css";
import "./media.css";


function App() {
  return (
    <Provider store = {store}>
        <Header />
        <Catalog />
        <Pagination />
    </Provider>
  );
}

export default App;
