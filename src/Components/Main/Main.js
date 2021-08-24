import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context'
import Wrapper from '../Styled/Wrapper';
import HomeBlock from './HomeBlock'
import { CounterBlock } from './CounterBlock';
import toggleSelectPath from '../Functions/toggleSelectPath';

const MainBlock = styled.div`
`;
const MainWrapper = styled(Wrapper)`
    padding-top: 50px;
    padding-bottom: 100px;
    flex-grow: 1;
    @media (max-width: 768px) {
        padding-top: 37px;
        padding-bottom: 75px;
    }
    @media (max-width: 576px) {
        padding-top: 25px;
        padding-bottom: 50px;
    }
`;

const Main = () => {

    const { selectFloor: { selectedFloor, setSelectedFloor },
        modalOpen: { setOpenModal },
        coordsHome: { floorCoords, setFloorCoords, handleApts }
    } = useContext(Context);

    const handleFloorSelect = targetFloor => {
        setSelectedFloor(targetFloor);
        setFloorCoords(toggleSelectPath(targetFloor, floorCoords));
    };

    const showFloorPlan = () => {
        handleApts(selectedFloor);
        setOpenModal('is-open');
    };

    return (
        <MainBlock>
            <MainWrapper>
                <HomeBlock showResult={showFloorPlan}
                    handleFloorSelect={handleFloorSelect}
                />
                <CounterBlock showResult={showFloorPlan}
                    handleFloorSelect={handleFloorSelect}
                />
            </MainWrapper>
        </MainBlock>
    );
}
export default Main;

