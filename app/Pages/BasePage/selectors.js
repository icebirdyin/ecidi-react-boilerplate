/**
 * selectors
 *
 * Reselect 库可以创建可记忆的(Memoized)、可组合的 selector 函数。
 * Reselect selectors 可以用来高效地计算 Redux store 里的衍生数据。
 *
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectCurrentUser = () => createSelector(
	selectGlobal(),
	(globalState) => globalState.get('currentUser')
);

const selectLoading = () => createSelector(
	selectGlobal(),
	(globalState) => globalState.get('loading')
);

const selectError = () => createSelector(
	selectGlobal(),
	(globalState) => globalState.get('error')
);

const selectRepos = () => createSelector(
	selectGlobal(),
	(globalState) => globalState.getIn(['userData', 'repositories'])
);

const selectLocationState = () => {
	let prevRoutingState;
	let prevRoutingStateJS;

	return (state) => {
		const routingState = state.get('route');

		if (!routingState.equals(prevRoutingState)) {
			prevRoutingState = routingState;
			prevRoutingStateJS = routingState.toJS();
		}

		return prevRoutingStateJS;
	};
};

export {
	selectGlobal,
	selectCurrentUser,
	selectLoading,
	selectError,
	selectRepos,
	selectLocationState,
};