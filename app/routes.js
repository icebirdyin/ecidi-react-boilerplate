const errorLoading = (err) => {
	console.error('页面加载失败！', err);
};

const loadModule = (cb) => (componentModule) => {
	cb(null, componentModule.default);
};

export default function createRoutes(store) {
	return [
		{
			path: '/',
			name: 'home',
			getComponent(nextState, cb) {
				const importModules = Promise.all([
					System.import('Pages/HomePage/reducer'),
					System.import('Pages/HomePage'),
				]);
				
				loadModule(cb);

				// importModules.then(([reducer, sagas, component]) => {
				// 	injectReducer('home', reducer.default);
				// 	injectSagas(sagas.default);

				// 	renderRoute(component);
				// });

				importModules.catch(errorLoading);
			},
		}, {
			path: '/features',
			name: 'features',
			getComponent(nextState, cb) {
				System.import('Pages/FeaturePage')
					.then(loadModule(cb))
					.catch(errorLoading);
			},
		}
	];
}