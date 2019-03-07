import React from 'react';

const NewsTitle = (props) => {
    return (
        <div className="newsTitle">
            <p style={{ fontWeight: 'bold' }}>{props.title}</p>
        </div>
    );
};

export default NewsTitle;