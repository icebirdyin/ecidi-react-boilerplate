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

import {
	selectRepos,
	selectLoading,
	selectError,
} from '../BasePage/selectors';

import {
	selectUsername,
} from './selectors';

import { changeUsername } from './actions';
import { loadRepos } from '../BasePage/actions';

import Button from '../../Components/Button';
import H2 from '../../Components/HX';

import styles from './styles.css';

export class HomePage extends React.Component {
	componentDidMount() {
		if (this.props.username && this.props.username.trim().length > 0) {
			this.props.onSubmitForm();
		}
	}
	/**
   * 改变路径
   *
   * @param  {string} route 设定的路径
   */
	openRoute = (route) => {
		this.props.changeRoute(route);
	};
	/**
   * 设定路径到 '/features'
   */
	openFeaturesPage = () => {
		this.openRoute('/features');
	};

	render() {
		return (
			<article>
				<div>
					<section className={`${styles.textSection} ${styles.centered}`}>
						<H2>立马开始你下一个项目</H2>
						<p>这是个简单的脚手架。。。。。。</p>
					</section>
					<section className={styles.textSection}>
						<form className={styles.usernameForm} onSubmit={this.props.onSubmitForm}>
							<label htmlFor="username">输入你的名字
								<span className={styles.atPrefix}>：</span>
								<input
									id="username"
									className={styles.input}
									type="text"
									placeholder="ecidi" 
									value={this.props.username} 
									onChange={this.props.onChangeUsername}
								/>
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
	changeRoute: React.PropTypes.func,
	loading: React.PropTypes.bool,
	error: React.PropTypes.oneOfType([
		React.PropTypes.object,
		React.PropTypes.bool,
	]),
	repos: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.bool,
	]),
	onSubmitForm: React.PropTypes.func,
	username: React.PropTypes.string,
	onChangeUsername: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
	return {
		onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
		changeRoute: (url) => dispatch(push(url)),
		onSubmitForm: (evt) => {
			if (evt !== undefined && evt.preventDefault) evt.preventDefault();
			dispatch(loadRepos());
		},

		dispatch,
	};
}

const mapStateToProps = createStructuredSelector({
	repos: selectRepos(),
	username: selectUsername(),
	loading: selectLoading(),
	error: selectError(),
});

// 包装 component
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


