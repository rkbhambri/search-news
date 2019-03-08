import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="search col-md-5 ml-4 mt-2">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search here"
                    onChange={(event) => props.searchInputHandler(event)} />
            </form>
        </div>
    );
};

export default SearchBar;