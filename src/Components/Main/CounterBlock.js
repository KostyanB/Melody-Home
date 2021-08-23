import React from 'react';
import styled from 'styled-components';
import CounterGroup from './CounterGroup';
import { MainButton } from '../Styled/MainButton';
import { Title } from '../Styled/Title';
import { InfoWrapper } from '../Styled/InfoWrapper';

const CounterWrapper = styled(InfoWrapper)`
    grid-column: 8/span 5;
    text-align: center;
    padding-bottom: 5px;
    @media (max-width: 768px) {
        padding-left: 10px;
        grid-column: 1/span 12;
    }
    @media (max-width: 768px) {

    }
`;
const CounterHeader = styled(Title)`
    font-size: 37px;
    color: #635854;
    line-height: 43px;
    @media (max-width: 768px) {
        font-size: 30px;
        line-height: 34px;
    }
`;

export const CounterBlock = ({ showResult, handleFloorSelect }) => {

    return (
        <CounterWrapper>
            <CounterHeader>Выберите желаемый этаж</CounterHeader>
            <CounterGroup handleFloor={handleFloorSelect}/>
            <MainButton onClick={showResult}>Смотреть квартиры на этаже</MainButton>
        </CounterWrapper>
    );
}
