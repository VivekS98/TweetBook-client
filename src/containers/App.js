import React from 'react';
import { configureStore } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ShowCase from './ShowCase';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/actionCreators';
import jwtDecode from 'jwt-decode';

const store = configureStore();

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}

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
