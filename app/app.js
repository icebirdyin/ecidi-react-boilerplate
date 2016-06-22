import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll';
import configureStore from './store';


const initialState = {};
const store = configureStore(initialState, browserHistory);

if (window.devToolsExtension) {
	window.devToolsExtension.updateStore(store);
}

import { selectLocationState } from './Pages/BasePage/selectors';
const history = syncHistoryWithStore(browserHistory, store, {
	selectLocationState: selectLocationState(),
});

import BasePage from './Pages/BasePage';
import createRoutes from './routes';
const rootRoute = {
	component: BasePage,
	childRoutes: createRoutes(store),
};

ReactDOM.render((
	<Provider store={store}>
		<Router history={history} 
			routes={rootRoute} 
			render={
				applyRouterMiddleware(useScroll())
			}
		/>
	</Provider>
), document.getElementById('app'));


import { install } from 'offline-plugin/runtime';
install();