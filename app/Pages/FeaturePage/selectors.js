/**
 * selectors
 *
 * 如果 state tree 非常大，或者计算量非常大，每次更新都重新计算可能会带来性能问题。
 * Reselect 能帮你省去这些没必要的重新计算。
 * 
 * Reselect 库可以创建可记忆的(Memoized)、可组合的 selector 函数。
 * Reselect selectors 可以用来高效地计算 Redux store 里的衍生数据。
 *
 * eg: 
 * const mySelector = createSelector(
 *     state => state.values.value1,
 *     state => state.values.value2,
 *     (value1, value2) => value1 + value2
 * )
 *
 */

import { createSelector } from 'reselect';

const selectUsername = () => createSelector(
	(state) => state.get('homeReducer'),
	(homeReducer) => homeReducer.get('username')
);

export {
	selectUsername,
};