import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Styled/Wrapper';
import { HomeBlock } from './Left/HomeBlock'
import { CounterBlock } from './Right/CounterBlock';

const MainWrapper = styled(Wrapper)`
    padding-top: 50px;
    padding-bottom: 100px;
    @media (max-width: 768px) {
        padding-top: 37px;
        padding-bottom: 75px;
    }
    @media (max-width: 576px) {
        padding-top: 25px;
        padding-bottom: 50px;
    }
`;

const Main = () => (

    <MainWrapper>
        <HomeBlock/>
        <CounterBlock/>
    </MainWrapper>
)
export default Main;

