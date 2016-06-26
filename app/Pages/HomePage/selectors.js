/**
 * selectors
 *
 * Reselect 库可以创建可记忆的(Memoized)、可组合的 selector 函数。
 * Reselect selectors 可以用来高效地计算 Redux store 里的衍生数据。
 *
 */

import { 
	createSelector 
} from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectUsername = () => createSelector(
	selectHome(),
	(state) => state.get('username')
);

export {
	selectHome,
	selectUsername,
};