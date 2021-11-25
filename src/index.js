import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import configureStore from './store/configureStore';

import { Provider } from 'react-redux';

import App from './Components/App';

const store = configureStore();
console.log(store.getState());

// when we dispatch an action to store,we should subscribe to notify that state is updated
store.subscribe(() => {
    console.log(store.getState());
});

const rootElement = document.getElementById('root');

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(jsx,rootElement);