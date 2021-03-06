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
	CHANGE_USER_NAME,
} from './actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
	username: '',
});

function appReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_USER_NAME:
			return state.set('username', action.username);
		default:
			return state;
	}
}

export default appReducer;