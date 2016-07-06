/*
 * HomePage
 *
 * at the '/' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';
import { selectUsername } from './selectors';

import { changeUserName } from './actions';
import { loadRepos } from '../BasePage/actions';

import Button from '../../Components/Button';
import { default as HX } from '../../Components/HX';

import styles from './styles.css';

class HomePage extends React.Component {
	/**
	 * 设定路径到 '/features'
	 */
	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	render() {
		return (
			<article>
				<div>
					<section className={`${styles.textSection} ${styles.centered}`}>
						<HX.H2>立马开始你下一个项目111xxx</HX.H2>
						<p>这是个简单的脚手架。。。。。。<span>1111ddd</span></p>
					</section>
					<section className={styles.textSection}>
						<form className={styles.usernameForm}>
							<label htmlFor="username">输入你的名字
								<span className={styles.atPrefix}>：</span>
								<input
									id="username"
									className={styles.input}
									type="text"
									placeholder="ecidi" 
									onChange={this.props.onChangeUsername}
								/>
								{this.props.username}
							</label>
						</form>
					</section>
					<Button handleRoute={this.openFeaturesPage}>Features</Button>
				</div>
			</article>
		);
	}
}

HomePage.propTypes = {
	username: React.PropTypes.string,
	changeRoute: React.PropTypes.func,
	onChangeUsername: React.PropTypes.func,
};

// 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
const mapStateToProps = createStructuredSelector({
	username: selectUsername(),
});

// 如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中。
function mapDispatchToProps(dispatch) {
	return {
		onChangeUsername: (e) => dispatch(changeUserName(e.target.value)),
		changeRoute: (url) => dispatch(push(url)),
	};
}

// react-redux 的使用方式
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// 连接 React 组件与 Redux store。
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
