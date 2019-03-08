import React from 'react';
import NewsTitle from './NewsTitle';
import NewsInfo from './NewsInfo';

const NewsItem = (props) => {
    return (
        <div className="newsItem pt-3">
            <NewsTitle title={props.item.title} />
            <NewsInfo
                points={props.item.points}
                author={props.item._highlightResult.author.value}
                created={props.item.created_at}
                comments={props.item.num_comments}
                url={props.item.url} />
        </div>
    );
};

export default NewsItem;