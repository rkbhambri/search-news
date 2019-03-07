import React from 'react';

const NewsInfo = (props) => {
    return (
        <div className="newsInfo">
            <span>{props.points}</span>
            <span> | {props.author}</span>
            <span> | {props.comments}</span>
            <span> | {props.url}</span>
        </div>
    );
};

export default NewsInfo;