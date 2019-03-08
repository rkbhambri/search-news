import React from 'react';

const Filter = (props) => {
    return (
        <div className="filter row col-md-4 pt-2" style={{ paddingLeft: '70px' }}>
            <label htmlFor="sortPrice" style={{ paddingTop: '5px' }}>Sort by</label>
            <select className="form-control col-md-7 ml-3" id="sortPrice" style={{ border: 'none' }} defaultValue="" onChange={(event) => props.sortBy(event)}>
                <option value="" disabled>select</option>
                <option value="popularity">Popularity</option>
                <option value="date">Date</option>
                <option value="comments">Comments</option>
            </select>
        </div >
    );
};

export default Filter;