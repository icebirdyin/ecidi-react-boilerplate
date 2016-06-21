import React from 'react';

import styles from './styles.css';


function H1(props) {
	return (
		<h1 className={styles.h1} {...props} />
	);
}

function H2(props) {
	return (
		<h2 className={styles.h2} {...props} />
	);
}

function H3(props) {
	return (
		<h3 {...props} />
	);
}

export default {
	H1,
	H2,
	H3,
};