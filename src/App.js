import React from "react";
import Header from './components/Header';
import Catalog from './components/Catalog';
import Footer from './components/Pagination';
import "./index.css";
import "./media.css";


function App() {
  return (
    <>
        <Header />
        <Catalog />
        <Footer />
    </>
  );
}

export default App;
