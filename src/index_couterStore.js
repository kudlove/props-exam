import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App_searchBook from "./App_searchBook";
import {Provider} from 'mobx-react'
import CounterStore from "./store/CounterStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider counterStore = {CounterStore}>
    <App/>
  </Provider>
);

reportWebVitals();
