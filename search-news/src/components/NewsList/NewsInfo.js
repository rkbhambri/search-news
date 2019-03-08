import React from 'react';

const NewsInfo = (props) => {
    let createDate = new Date(props.created);
    const year = createDate.getFullYear();
    let currentDate = new Date();
    const created = currentDate.getFullYear();
    return (
        <div className="newsInfo" style={{ fontSize: '14px' }}>
            <span>{props.points} points</span>
            <span> | {props.author}</span>
            {
                created - year === 1 && <span> | 1 year ago</span>
            }
            {
                created - year > 1 && <span> | {created - year} years ago</span>
            }
            {
                created - year === 0 && (currentDate.getMonth() - createDate.getMonth()) === 1 && <span> | 1 month ago</span>
            }
            {
                created - year === 0 && (currentDate.getMonth() - createDate.getMonth()) > 1 && <span> | {(currentDate.getMonth() - createDate.getMonth())} months ago</span>
            }
            <span> | {props.comments} comments</span>
            <span> | <a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a></span>
        </div>
    );
};

export default NewsInfo;