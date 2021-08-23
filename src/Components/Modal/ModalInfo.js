import React, { useContext }from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import { InfoWrapper } from '../Styled/InfoWrapper';
import { Title } from '../Styled/Title';
import AptLink from './AptLink';
import closeImg from '../../img/close.svg';

const ModalInfoWrapper = styled(InfoWrapper)`
    width: 40%;
    padding: 50px 46px;
    align-items: flex-start;
    position: relative;
`;
const InfoTitle = styled(Title)`
    font-size: 24px;
    line-height: 29px;
    color: #000;
`;
const AptList = styled.ul`
    /* margin-top: 55px; */
    /* margin-bottom: 55px; */
`;
const InfoSub = styled.p`
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #635854;
    max-width: 250px;
`;
const CloseBtn = styled.button`
    background-image: url(${closeImg});
    background-size: cover;
    background-color: transparent;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 38px;
    right: 27px;
`;

const ModalInfo = ({ handleAptSelect, showSelectedApt, close }) => {

    const { coordsHome: { aptsCoords }
    } = useContext(Context);

    return (
        <ModalInfoWrapper>
            <CloseBtn id="modal-close" onClick={e => close(e)}/>
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