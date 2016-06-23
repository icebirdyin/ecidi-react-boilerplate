/*
 * Home Actions
 *
 * To add a new Action:
 * 1) Import your actiontype
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME,
} from './actionTypes';

export function changeUsername(name) {
	return {
		type: CHANGE_USERNAME,
		name
	};
}