/**
 * routes.js
 *
 * 整个应用的路径配置
 * 
 */
import React from 'react';

import HomePage from 'Pages/HomePage';
import FeaturePage from 'Pages/FeaturePage';

export default function createRoutes() {
	console.log(HomePage)
	return [
		{
			path: '/',
			name: 'home',
			component: HomePage
    	},
    	{
			path: '/features',
			name: 'features',
			component: FeaturePage
    	},
	];
}