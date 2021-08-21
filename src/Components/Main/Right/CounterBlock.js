import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Functions/Context'
import CounterGroup from './CounterGroup';
import { MainButton } from './MainButton';
import toggleSelectFloor from '../../Functions/toggleSelectFloor';

const CounterWrapper = styled.div`
    grid-column: 8/span 5;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    /* padding-top: 68px; */
    padding-bottom: 5px;
    @media (max-width: 768px) {
        padding-left: 10px;
        grid-column: 1/span 12;
    }
    @media (max-width: 768px) {

    }
`;
const CounterHeader = styled.h2`
    font-size: 37px;
    font-family: "Bebas Neue", sans-serif;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
    color: #635854;
    line-height: 43px;
    @media (max-width: 768px) {
        font-size: 30px;
        line-height: 34px;
    }
`;

export const CounterBlock = () => {

    const { selectFloor: { selectedFloor, setSelectedFloor },
        floorCoords: { floorCoords, setFloorCoords }
    } = useContext(Context);

    const handleFloorSelect = targetFloor => {
        setSelectedFloor(targetFloor);
        setFloorCoords(toggleSelectFloor({ targetFloor, floorCoords }));
    };

    return (
        <CounterWrapper>
            <CounterHeader>Выберите желаемый этаж</CounterHeader>
            <CounterGroup handle={handleFloorSelect}/>
            <MainButton>Смотреть квартиры на этаже</MainButton>
        </CounterWrapper>
    );
}
