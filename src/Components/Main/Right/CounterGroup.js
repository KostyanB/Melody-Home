import React, { useContext } from 'react';
import styled from 'styled-components';
import arrowBtn from '../../../img/arrow-up.svg';
import { Context } from '../../Functions/Context'

const GroupWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    @media (max-width: 768px) {
        -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    }
`;
const ButtonUp = styled.button`
    background-color: transparent;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
`;
const ButtonDown = styled(ButtonUp)`
    -webkit-transform: rotateX(180deg);
        transform: rotateX(180deg);
`;
const FloorNum = styled.span`
    font-size: 95px;
    font-family: "Bebas Neue", sans-serif;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
    color: #635854;
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 10px 10px;
    @media (max-width: 768px) {
        margin: 0 15px;
        font-size: 70px;
    }
`;

const CounterGroup = ({ handle }) => {

    const { selectFloor: { selectedFloor } } = useContext(Context);

    const chekFloor = val => {
        if (val <= 18 && val >= 2) {
            (val < 10) ? handle(`0${val}`) : handle(String(val));
        }
    }

    return (
        <GroupWrapper>
            <ButtonUp onClick={() => chekFloor(+selectedFloor + 1)}><img src={arrowBtn} alt="up"/></ButtonUp>
            <FloorNum>{selectedFloor}</FloorNum>
            <ButtonDown onClick={() => chekFloor(+selectedFloor - 1)}><img src={arrowBtn} alt="down"/></ButtonDown>
        </GroupWrapper>
    );
}
export default CounterGroup;