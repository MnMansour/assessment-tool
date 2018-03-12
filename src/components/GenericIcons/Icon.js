
import React from 'react';
import PropTypes from 'prop-types'; 
import src from './umbrella.svg'

function Icon (props){
    const sizeMap = { x1: 20, x2: 40, x3: 60, };
    const iconSize = sizeMap[props.size];
    const svgpath = props.svgpath;
    const mysvg = props.mysvg;
    console.log('src', src)
    return (
        <div dangerouslySetInnerHTML={{__html: src}} />
    )
}



export default Icon;

Icon.propTypes = {
    size: PropTypes.string
}