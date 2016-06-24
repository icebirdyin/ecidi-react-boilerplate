/**
 * routes.js
 *
 * 整个应用的路径配置
 * 
 */

import { HomePage } from 'Pages/HomePage';
import { FeaturePage } from 'Pages/FeaturePage';

export default function createRoutes() {
	return [
		<Route path="/" component={HomePage}/>,
		<Route path="/features" component={FeaturePage}/>
	];
}