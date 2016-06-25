/**
 * app.js
 *
 * 整个应用的总入口
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import {
	applyRouterMiddleware,
	browserHistory,
	Router,
	Route
} from 'react-router';
import {
	syncHistoryWithStore
} from 'react-router-redux';
import useScroll from 'react-router-scroll';
import configureStore from './store';

// 结合 redux store 和 history
const initialState = {};
const store = configureStore(initialState, browserHistory);

if (window.devToolsExtension) {
	window.devToolsExtension.updateStore(store);
}

import {
	selectLocationState
} from 'Pages/BasePage/selectors';
const history = syncHistoryWithStore(browserHistory, store, {
	selectLocationState: selectLocationState(),
});

import BasePage from 'Pages/BasePage';
import createRoutes from './routes';

ReactDOM.render((
	<Provider store={store}>
		<Router history={history} render={applyRouterMiddleware(useScroll())}>
			<Route component={BasePage} children={createRoutes(store)}/>
		</Router>
	</Provider>
), document.getElementById('app'));