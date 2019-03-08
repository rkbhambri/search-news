import React from 'react';

const NewsTitle = (props) => {
    return (
        <div className="newsTitle">
            <span style={{ fontWeight: 'bold' }}>{props.title}</span>
        </div>
    );
};

export default NewsTitle;