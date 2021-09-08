import React, { useContext }from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import toggleSelectPath from '../Functions/toggleSelectPath';
import { Overlay } from '../Styled/Overlay';
import ModalInfo from './ModalInfo';
import ModalPlan from './ModalPlan';
import { Icons } from '../SvgElems';

const ModalOverlay = styled(Overlay)`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.5s;

`;
const ModalContent = styled.div`
    max-width: 1003px;
    min-height: 565px;
    flex-grow: 1;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    position: relative;
    @media (max-width: 576px) {
        width: 100vw;
        height: 100vh;
        margin: 2vh auto;
        flex-direction: column;
        overflow-y: auto;
    }
`;
const CloseButton = styled.button`
    background-color: transparent;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 38px;
    right: 27px;
`;

const Modal = () => {
    const { modalOpen: { openModal, setOpenModal },
        selectApt: { setSelectedApt },
        coordsHome: { aptsCoords, handleShowApt }
    } = useContext(Context);

    const closeModal = e =>
        (e.target.closest('#modal-close') ||
            e.target.id === 'modal-overlay') &&
            setOpenModal('');

    const handleAptSelect = targetApt => {
        setSelectedApt(targetApt);
        const coords = aptsCoords.apts;
        handleShowApt(toggleSelectPath(targetApt, coords));
    };

    const showSelectedApt = apt => {
        setSelectedApt(apt);
        console.log('выбрана квартира: ', apt);
    };

    return (
        <ModalOverlay className={openModal}
            id="modal-overlay"
            onClick={e => closeModal(e)}
            >
            <ModalContent>
            <CloseButton id="modal-close">
                <Icons name="close"
                    width={28}
                    height={28}
                    onClick={e => closeModal(e)}
                />
            </CloseButton>
                <ModalPlan handleAptSelect={handleAptSelect}
                    showSelectedApt={showSelectedApt}
                />
                <ModalInfo handleAptSelect={handleAptSelect}
                    showSelectedApt={showSelectedApt}
                />
            </ModalContent>
        </ModalOverlay>
    );
}
export default Modal;