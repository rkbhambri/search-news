import React, { Component } from 'react';
import Header from '../Header/Header';
import NewsList from '../../components/NewsList/NewsList';
import newsData from '../../data.json';
import Pagination from '../../components/Pagination/Pagination';

class Layout extends Component {

	state = {
		newsData: [],
		pageNumberArray: [],
		pageNumber: 1,
		showPagination: true,
		limit: 15,
		skip: 0,
		filteredNewsData: null,
		inputSearch: ''
	};

	componentDidMount() {
		let pageNumberArray = JSON.parse(JSON.stringify(this.state.pageNumberArray));
		for (let i = 1; i <= newsData.data.length / 15; i++) {
			pageNumberArray.push(i)
		}
		this.setState({
			...this.state,
			pageNumberArray,
			newsData: newsData.data
		});
	};

	paginateData = (number) => {
		this.setState({
			...this.state,
			skip: ((number * 15) - 15),
			limit: number * 15,
			pageNumber: number
		});
	};

	paginatePreviousData = () => {
		let number = this.state.pageNumber;
		if (this.state.pageNumber > 1) {
			number = this.state.pageNumber - 1;
		}
		this.setState({
			...this.state,
			skip: ((number * 15) - 15),
			limit: number * 15,
			pageNumber: number
		});
	};

	paginateNextData = () => {
		let number = this.state.pageNumber;
		if (this.state.pageNumber < 5) {
			number = this.state.pageNumber + 1;
		}
		this.setState({
			...this.state,
			skip: ((number * 15) - 15),
			limit: number * 15,
			pageNumber: number
		});
	};

	sortBy = (event) => {
		let filteredNewsData = this.state.filteredNewsData;
		if (event.target.value === 'popularity') {
			if (this.state.filteredNewsData === null) {
				filteredNewsData = this.state.newsData.sort((obj1, obj2) => obj2.points - obj1.points);
			} else {
				filteredNewsData = this.state.filteredNewsData.sort((obj1, obj2) => obj2.points - obj1.points);
			}
		}
		if (event.target.value === 'date') {
			if (this.state.filteredNewsData === null) {
				filteredNewsData = this.state.newsData.sort((obj1, obj2) => new Date(obj2.created_at) - new Date(obj1.created_at));
			} else {
				filteredNewsData = this.state.filteredNewsData.sort((obj1, obj2) => new Date(obj2.created_at) - new Date(obj1.created_at));
			}
		}
		if (event.target.value === 'comments') {
			if (this.state.filteredNewsData === null) {
				filteredNewsData = this.state.newsData.sort((obj1, obj2) => obj2.num_comments - obj1.num_comments);
			} else {
				filteredNewsData = this.state.filteredNewsData.sort((obj1, obj2) => obj2.num_comments - obj1.num_comments);
			}
		}
		this.setState({
			...this.state,
			filteredNewsData
		});
	};

	searchInputHandler = (event) => {
		let filteredNewsData = this.state.newsData.filter((item) => {
			return item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		});
		let showPagination = false;
		if (event.target.value === '' && filteredNewsData.length > 0) {
			filteredNewsData = null;
			showPagination = true
		}
		if (event.target.value !== '' && filteredNewsData.length === 0) {
			showPagination = false;
		}
		this.setState({
			...this.state,
			inputSearch: event.target.value,
			filteredNewsData,
			showPagination
		});
	};

	render() {
		return (
			<div className="layout col-md-10 offset-1">
				<Header
					sortBy={(event) => this.sortBy(event)}
					searchInputHandler={(event) => this.searchInputHandler(event)} />
				<NewsList newsData={(this.state.filteredNewsData !== null || this.state.inputSearch.length > 0) ? this.state.filteredNewsData : this.state.newsData.slice(this.state.skip, this.state.limit)} />
				{
					this.state.showPagination &&
					<Pagination
						pageNumber={this.state.pageNumberArray}
						paginateData={(number) => { this.paginateData(number) }}
						limit={this.state.limit}
						paginatePreviousData={() => this.paginatePreviousData()}
						paginateNextData={() => this.paginateNextData()}
					/>
				}
			</div>
		);
	};
};

export default Layout;