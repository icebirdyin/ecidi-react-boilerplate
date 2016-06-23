import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

// 使用 redux-saga 模块的 createSagaMiddleware 工厂函数来创建一个 Saga middleware;
// createSagaMiddleware 接受 Sagas 列表，这些 Sagas 将会通过创建的 middleware 被立即执行。
const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}, history) {
	const middlewares = [
		sagaMiddleware,
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

	store.runSaga = sagaMiddleware.run;
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