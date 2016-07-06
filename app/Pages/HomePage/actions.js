/*
 * Actions
 *
 * Action 是把数据从应用传到 store 的有效载荷。
 * 它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。
 *
 * Action 只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。
 * 而这正是 reducer 要做的事情。
 *
 * To add a new Action:
 * 1) Import your actiontype
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
	CHANGE_USER_NAME,
} from './actionTypes';

export function changeUserName(username) {
	return {
		type: CHANGE_USER_NAME,
		username
	};
}