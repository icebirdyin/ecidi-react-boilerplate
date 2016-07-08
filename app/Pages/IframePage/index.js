/*
 * IframePage
 *
 * at the '/iframe' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import IframeHtml from './iframe.html';

class IframePage extends React.Component {
	componentDidMount(){
		
	}
	render() {
		return (
			<div dangerouslySetInnerHTML={{__html: IframeHtml}}></div>
		);
	}
}

// react-redux 的使用方式
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// 连接 React 组件与 Redux store。
export default connect(null)(IframePage);