import React from 'react';
import styled from 'styled-components';
import HomeImage from './HomeImage';

const HomeBlockWrap = styled.div`
    grid-column: 1/span 7;
    @media (max-width: 768px) {
        grid-column: 1/span 12;
    }
`;

export const HomeBlock = () => (

    <HomeBlockWrap>
        <HomeImage/>
    </HomeBlockWrap>
)
