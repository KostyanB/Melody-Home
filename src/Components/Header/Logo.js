import React from 'react';
import styled from 'styled-components';
import { Icons } from '../SvgElems';

const LogoWrap = styled.a`
    grid-column: 1/span 2;
    align-self: center;
    width: 120px;
    height: 33px;
    background-color: transparent;

    @media (max-width: 768px) {
        grid-column: 1/span 4;
        grid-row: 1;
    }
`;
const LogoSvg = styled(Icons)`
    width: 100%;
    height: 100%;
    :hover {
        fill: #3595F6;
    }
`;

const Logo = () => (
    <LogoWrap>
        <LogoSvg name="logo" fill="#fff"/>
    </LogoWrap>
)
export default Logo;