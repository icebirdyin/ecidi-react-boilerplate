/*
 * Store
 *
 * Redux 应用只有一个单一的 store。
 * 当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。
 *
 */

import { 
	createStore, 
	applyMiddleware, 
	compose 
} from 'redux';
import { 
	fromJS 
} from 'immutable';
import { 
	routerMiddleware 
} from 'react-router-redux';
import createReducer from './reducers';

const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}, history) {
	const middlewares = [
		routerMiddleware(history),
	];

	const enhancers = [
		applyMiddleware(...middlewares),
		devtools(),
	];

	// 创建 Redux store 来存放应用的状态。
	const store = createStore(
		createReducer(),
		fromJS(initialState),
		compose(...enhancers)
	);

	store.asyncReducers = {};


	if (module.hot) {
		module.hot.accept('./reducers', () => {
			System.import('./reducers').then((reducerModule) => {
				const createReducers = reducerModule.default;
				const nextReducers = createReducers(store.asyncReducers);

				store.replaceReducer(nextReducers);
			});
		});
	}

	return store;
}