import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, Link } from 'react-router';

const App = React.createClass({
	render() {
		return (
			<div>
				<h1>App</h1>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/inbox">Inbox</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
});

React.render((
	<Router>
		<Route path="/" component={App}>
			<Route path="about" component={About} />
			<Route path="inbox" component={Inbox} />
		</Route>
	</Router>
), document.body);