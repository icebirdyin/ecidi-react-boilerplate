/*
 * Reducer
 *
 * reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
	CHANGE_USERNAME,
} from './actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
	username: '',
});

function homeReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_USERNAME:
			return state.set('username', action.name);
		default:
			return state;
	}
}

export default homeReducer;
