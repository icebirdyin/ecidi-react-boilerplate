import createReducer from '../reducers';


export function injectAsyncReducer(store) {
	return (name, asyncReducer) => {
		store.asyncReducers[name] = asyncReducer;
		store.replaceReducer(createReducer(store.asyncReducers));
	};
}


export function getHooks(store) {
	return {
		injectReducer: injectAsyncReducer(store)
	};
}
