import React, { Component } from 'react';
import Header from '../Header/Header';
import NewsList from '../../components/NewsList/NewsList';
import newsData from '../../data.json';

class Layout extends Component {
	render() {
		return (
			<div className="layout col-md-10 offset-1">
				<Header />
				<NewsList newsData={newsData.data} />
			</div>
		);
	};
};

export default Layout;