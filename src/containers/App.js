import React from 'react';
import { configureStore } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./NavBar";
import '../styling/main.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
