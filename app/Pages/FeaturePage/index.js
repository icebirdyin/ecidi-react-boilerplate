import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Button from '../../Components/Button';
import H1 from '../../Components/HX';

import styles from './styles.css';

export class FeaturePage extends React.Component {

	openRoute = (route) => {
		this.props.changeRoute(route);
	};

	openHomePage = () => {
		this.openRoute('/');
	};

	render() {
		return (
			<div>
			<H1>Features</H1>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<p className={styles.listItemTitle}>快速脚手架</p>
					<p>自动化组件，路由，韩梅梅</p>
				</li>

				<li className={styles.listItem}>
					<p className={styles.listItemTitle}>即时反馈</p>
					<p>享受即时刷新快乐！</p>
				</li>

				<li className={styles.listItem}>
					<p className={styles.listItemTitle}>管理state</p>
					<p>单向数据流，完备的日志记录，方便调试。</p>
				</li>
			</ul>
			<Button handleRoute={this.openHomePage}>Home</Button>
			</div>
		);
	}
}

FeaturePage.propTypes = {
	changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
	return {
		changeRoute: (url) => dispatch(push(url)),
	};
}

export default connect(null, mapDispatchToProps)(FeaturePage);