/*
 * HomePage
 *
 * at the '/features' route
 *
 */

import React from 'react';
import { 
	connect 
} from 'react-redux';
import { 
	push 
} from 'react-router-redux';

import Button from '../../Components/Button';
import { default as HX } from '../../Components/HX';

import styles from './styles.css';

class FeaturePage extends React.Component {
	/**
   * 改变路径
   *
   * @param  {string} route 设定的路径
   */
	openRoute = (route) => {
		this.props.changeRoute(route);
	};
	/**
   * 设定路径到 '/'
   */
	openHomePage = () => {
		this.openRoute('/');
	};

	render() {
		return (
			<div>
			<HX.H1>Features</HX.H1>
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
			<Button handleRoute={() => this.openHomePage()}>Home</Button>
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

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// 连接 React 组件与 Redux store。
// export default connect(null, mapDispatchToProps)(FeaturePage);
export default FeaturePage;