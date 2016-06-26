/*
 * HomePage
 *
 * at the '/' route
 *
 */

import React from 'react';
import {
	connect
} from 'react-redux';
import {
	push
} from 'react-router-redux';

import {
	createStructuredSelector
} from 'reselect';

import {
	selectRepos,
	selectLoading,
	selectError,
} from '../BasePage/selectors';

import {
	selectUsername,
} from './selectors';

import {
	changeUsername
} from './actions';
import {
	loadRepos
} from '../BasePage/actions';

import Button from '../../Components/Button';
import { default as HX } from '../../Components/HX';

import styles from './styles.css';

class HomePage extends React.Component {
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
	openRoute(route) {
		this.props.changeRoute(route);
	}
	/**
	 * 设定路径到 '/features'
	 */
	openFeaturesPage() {
		this.openRoute('/features').bind(this);
	}

	render() {
		return (
			<article>
				<div>
					<section className={`${styles.textSection} ${styles.centered}`}>
						<HX.H2>立马开始你下一个项目</HX.H2>
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
									onChange = {
										this.props.onChangeUsername
									}
								/>
							</label>
						</form>
					</section>
					<Button handleRoute={this.openFeaturesPage.bind(this)}>Features</Button>
				</div>
			</article>
		);
	}
}

// 包装 component
export default HomePage;