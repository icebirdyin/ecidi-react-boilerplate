import { fromJS } from 'immutable';

const initialState = fromJS({
	username: '',
});

function homeReducer(state = initialState, action) {
	switch (action.type) {
		case 'boilerplate/Home/CHANGE_USERNAME':
			return state.set('username', action.name);
		default:
			return state;
	}
}

export default homeReducer;
