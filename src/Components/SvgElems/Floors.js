import React from 'react';
import FloorsSvg from './floors.svg';
import styled from 'styled-components';

const SvgWrap = styled.svg`
    width: 100%;
    height: 100%;

`;

const Floors = ({name, fill, stroke, width, height, className = ''}) => {

    return(
        <SvgWrap className={className}>
            <use xlinkHref={`${FloorsSvg}#floor-${name}`} />
        </SvgWrap>
    )
}

export default Floors;