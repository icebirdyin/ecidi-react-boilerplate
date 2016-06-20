import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router';

React.render((
	<Router>
		<Route path="/" component={App}>
			<Route path="about" component={About} />
			<Route path="inbox" component={Inbox} />
		</Route>
	</Router>
), document.body);