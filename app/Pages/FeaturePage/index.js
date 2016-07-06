/*
 * HomePage
 *
 * at the '/features' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';
import { selectUsername } from './selectors';

import Button from '../../Components/Button';
import { default as HX } from '../../Components/HX';

import styles from './styles.css';

class FeaturePage extends React.Component {
	/**
   * 设定路径到 '/'
   */
	openHomePage = () => {
		this.props.changeRoute('/');
	};

	render() {
		return (
			<div>
			<HX.H1>Features</HX.H1>
			<HX.H1>{this.props.username}</HX.H1>
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
	username: React.PropTypes.string,
	changeRoute: React.PropTypes.func,
};

// 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
// 原始的写法如下：
// const mapStateToProps = (state) => {
// 	return {
// 		username: state.get('homeReducer').get('username'),
// 	}
// }
const mapStateToProps = createStructuredSelector({
	username: selectUsername(),
});

// 如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中。
function mapDispatchToProps(dispatch) {
	return {
		changeRoute: (url) => dispatch(push(url)),
	};
}

// react-redux 的使用方式
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// 连接 React 组件与 Redux store。
export default connect(mapStateToProps, mapDispatchToProps)(FeaturePage);