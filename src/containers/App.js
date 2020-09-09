import React from 'react';
import { configureStore } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          Hello!
        </div>
      </Router>
    </Provider>
  );
}

export default App;
