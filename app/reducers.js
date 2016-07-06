/**
 * 合并所有的 reducers 
 *
 * 再次强调一下 Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。
 * 使用 combineReducers() 将多个 reducer 合并成为一个。
 * 之后会将其导入到 store.js 文件当中，并传递给 createStore()。
 * 
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import homeReducer from './Pages/HomePage/reducer';

const routeInitialState = fromJS({
	locationBeforeTransitions: null,
});

function routeReducer(state = routeInitialState, action) {
	switch (action.type) {
		case LOCATION_CHANGE:
			return state.merge({
				locationBeforeTransitions: action.payload,
			});
		default:
			return state;
	}
}

function createReducer() {
	return combineReducers({
		routeReducer,
		homeReducer: homeReducer,
	});
}

export default createReducer;
