/* eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
//Attaches redux store to our container components
import { Provider } from 'react-redux'
/* Local import */
import configureStore from './store/configureStore'

// You can import SASS/CSS files too!
//Webpack will run the associated loader and plug this into the page.
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './components/App';

const store = configureStore();

//debugger

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
