/*
 * Store
 *
 * Redux 应用只有一个单一的 store。
 * 将多个 reducer 合并成为之后传入到 createStore() 当中。
 *
 */

import { 
	createStore, 
	applyMiddleware, 
	compose 
} from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
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
	// createStore() 的第二个参数是可选的, 用于设置 state 初始状态。
	// compose 从右到左来组合多个函数。
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