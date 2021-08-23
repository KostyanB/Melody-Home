import React, { useContext }from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import { InfoWrapper } from '../Styled/InfoWrapper';
import { Title } from '../Styled/Title';
import AptLink from './AptLink';

const ModalInfoWrapper = styled(InfoWrapper)`
    width: 40%;
    padding: 50px 46px;
    align-items: flex-start;
    @media (max-width: 576px) {
        width: 100vw;
        padding: 20px;
        align-items: center;
    }
`;
const InfoTitle = styled(Title)`
    font-size: 24px;
    line-height: 29px;
    color: #000;
    @media (max-width: 576px) {
        margin-bottom: 10px;
    }
`;
const AptList = styled.ul`
    @media (max-width: 576px) {
        display: grid;
        justify-content: space-evenly;
        grid-template-columns: repeat(2, 1fr);
        column-gap: clamp(10px, 5vw, 30px);
        margin-bottom: 20px;
    }
`;
const InfoSub = styled.p`
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #635854;
    max-width: 250px;
    @media (max-width: 576px) {
        text-align: center;
        max-width: 100vw;
    }
`;

const ModalInfo = ({ handleAptSelect, showSelectedApt }) => {

    const { coordsHome: { aptsCoords }
    } = useContext(Context);

    return (
        <ModalInfoWrapper>
            <InfoTitle>Выберите квартиру</InfoTitle>
            <AptList>
                {aptsCoords?.apts.map(item =>
                    <AptLink key={item.id}
                        num={item.id}
                        area={item.area}
                        rooms={item.rooms}
                        active={item.active}
                        handle={handleAptSelect}
                        show={showSelectedApt}
                        />
                )}
            </AptList>
            <InfoSub>Квартиры, отмеченные серым, уже выкуплены</InfoSub>
        </ModalInfoWrapper>
    );
}
export default ModalInfo;