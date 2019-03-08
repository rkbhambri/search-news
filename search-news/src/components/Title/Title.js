import React from 'react';
import './Title.css';
const Title = (props) => {
    return (
        <p className="title"> {props.title} </p>
    );
};

export default Title;