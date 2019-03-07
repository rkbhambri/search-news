import React from 'react';

const Filter = (props) => {
    return (
        <div className="filter row col-md-4 pt-2" style={{ paddingLeft: '70px' }}>
            <label htmlFor="sortPrice mt-2">Sort by</label>
            <select className="form-control col-md-5 ml-3" id="sortPrice" defaultValue="">
                <option value="" disabled>select</option>
                <option value="popularity">Popularity</option>
                <option value="date">Date</option>
            </select>
        </div>
    );
};

export default Filter;