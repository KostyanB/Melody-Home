import React, { useContext }from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import { Title } from '../Styled/Title';
import { ImgWrapper } from '../Styled/ImgWrapper';
import imgPlan from '../../img/floor1.png';
import DrawSvg from '../SvgDraw/DrawSvg';

const Plan = styled.div`
    width: 60%;
    background-color: #EBEBEB;
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 50px;
    /* @media (max-width: 768px) {
        width: 100%;
    } */
`;

const PlanTitle = styled(Title)`
    font-size: 24px;
    line-height: 29px;
    color: #000;
    /* display: block; */
    margin-bottom: 25px;

`;

const PlanWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FloorPlan = styled(ImgWrapper)`
    /* align-self: center; */
    background-image: url(${imgPlan});
    background-position-y: center;
    width: 377px;
    height: 379px;
`;
const ModalPlan = ({ handleAptSelect, showSelectedApt }) => {

    const { selectFloor: { selectedFloor },
        coordsHome: { aptsCoords }
    } = useContext(Context);

    return (
        <Plan>
            <PlanTitle>Этаж {selectedFloor}</PlanTitle>
            <PlanWrap>
                <FloorPlan>
                    <DrawSvg viewBox="0 0 377 379"
                        className="show-apts"
                        elemCoords={aptsCoords?.apts}
                        handleField={handleAptSelect}
                        showResult={showSelectedApt}
                    />
                </FloorPlan>
            </PlanWrap>

        </Plan>
    );
}
export default ModalPlan;