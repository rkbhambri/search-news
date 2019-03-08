import React from 'react';
import Title from '../../components/Title/Title';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';

const Header = (props) => {
    return (
        <div className="header pt-2" style={{ background: '#ED7233', color: '#fff' }}>
            <div className="row w-100 m-0 pl-3">
                <Title title="Search News" />
                <SearchBar searchInputHandler={(event) => props.searchInputHandler(event)} />
                <Filter sortBy={(event) => props.sortBy(event)} />
            </div>
        </div>
    );
};

export default Header;