import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="row">
                    <Title title="Search News" />
                    <SearchBar />
                    <Filter />
                </div>
            </div>
        );
    };
};

export default Header;