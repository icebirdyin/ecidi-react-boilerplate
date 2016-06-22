import { fromJS } from 'immutable';

const initialState = fromJS({
	loading: false,
	error: false,
	currentUser: false,
	userData: fromJS({
		repositories: false,
	}),
});

function appReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOAD_REPOS':
			return state
				.set('loading', true)
				.set('error', false)
				.setIn(['userData', 'repositories'], false);
		case 'LOAD_REPOS_SUCCESS':
			return state
				.setIn(['userData', 'repositories'], action.repos)
				.set('loading', false)
				.set('currentUser', action.username);
		case 'LOAD_REPOS_ERROR':
			return state
				.set('error', action.error)
				.set('loading', false);
		default:
			return state;
	}
}

export default appReducer;