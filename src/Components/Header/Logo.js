import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.svg';

const LogoLink = styled.a`
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

export const Logo = () => (
    <LogoLink>
        <img src={logo} alt="ЖК Мелодия"/>
    </LogoLink>
)