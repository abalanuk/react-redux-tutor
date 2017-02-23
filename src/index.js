/* eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
//Attaches redux store to our container components
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
/* Local import */
import configureStore from './store/configureStore'
import {loadCourses} from './actions/courseActions'
import {loadAuthors} from './actions/authorActions'
import routes from './routes'

// You can import SASS/CSS files too!
//Webpack will run the associated loader and plug this into the page.
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

debugger;

store.dispatch(loadCourses())
store.dispatch(loadAuthors())

ReactDOM.render(
	<Provider store={store}>
    	<Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')

);