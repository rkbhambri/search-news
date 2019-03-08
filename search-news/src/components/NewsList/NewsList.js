import React from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {
    return (
        <div className="newsList pl-3" style={{ background: '#eee' }}>
            {
                props.newsData.length > 0 && props.newsData.map((item, index) => {
                    return <NewsItem item={item} key={index} />
                })
            }
        </div>
    );
};

export default NewsList;