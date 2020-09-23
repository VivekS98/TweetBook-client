import React from 'react';
import { configureStore } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ShowCase from './ShowCase';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ShowCase />
      </Router>
    </Provider>
  );
}

export default App;
