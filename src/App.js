import React from "react";
import { Provider } from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Electronics from './components/Electronics';
import WishList from './components/WishList';
import "./index.css";
import "./media.css";


function App() {
  return (
    <Provider store = {store}>
        <Router>
            <Switch>
                <Route path="/" exact component={Electronics}/>
                <Route path="/wishlist" component={WishList}/>
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;
