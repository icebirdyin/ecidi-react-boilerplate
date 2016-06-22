import React from 'react';

import 'sanitize.css/sanitize.css';

import Footer from 'components/Footer';

import styles from './styles.css';

function BasePage(props) {
	return (
		<div className={styles.wrapper}>
			<a className={styles.logoWrapper} href="###">
				XXXX
			</a>
			{props.children}
			<Footer />
		</div>
	);
}

BasePage.propTypes = {
	children: React.PropTypes.node,
};

export default BasePage;
