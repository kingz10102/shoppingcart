import React from 'react';
import Navbar from './components_folder/Navbar';
import Home from './components_folder/Home';
import Cart from './components_folder/Cart'
import'./App.css';
// Provider wraps all components 
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App()  {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Home />
        {/* Home page  */}
        <Switch>
        <Route exact path="/" component={Home} />
        {/* Cart page */}
        <Route path="/cart" component={Cart}/>
        </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
