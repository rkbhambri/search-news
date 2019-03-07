import React from 'react';
import NewsTitle from './NewsTitle';
import NewsInfo from './NewsInfo';

const NewsItem = (props) => {
    return (
        <div className="newsItem">
            <NewsTitle title={props.item.title} />
            <NewsInfo
                points={props.item.points}
                author={props.item._highlightResult.author.value}
                comments={props.item.num_comments}
                url={props.item.url} />
        </div>
    );
};

export default NewsItem;