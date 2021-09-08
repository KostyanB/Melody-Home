import React from 'react';
import FlatsSvg from './floors.svg';

const Flats = ({name, fill, stroke, width, height, className = ''}) => {

    return(
        <svg className={`icon icon-${name} ${className}`} fill={fill} stroke={stroke} width={width} height={height}>
            <use xlinkHref={`${FlatsSvg}#flat-${name}`} />
        </svg>
    )
}

export default Flats;