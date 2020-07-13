import React from 'react';
import Navbar from './components_folder/Navbar';
import Home from './components_folder/Home';
import'./App.css';
import { Provider } from 'react-redux'
import store from './store'


function App()  {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
