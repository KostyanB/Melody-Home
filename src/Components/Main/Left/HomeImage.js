import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Functions/Context';
import homeImg from '../../../img/home.png';
import FloorPath from './FloorPath';
import toggleSelectFloor from '../../Functions/toggleSelectFloor';

const ImageWrap = styled.div`
    max-width: 740px;
    height: auto;
    background-image: url(${homeImg});
    background-size: contain;
    background-repeat: no-repeat;
`;
const Svg = styled.svg`
    width: 100%;
    height: 100%;
    fill: none;
`;

const HomeImage = () => {

    const { selectFloor: { setSelectedFloor },
        floorCoords: { floorCoords, setFloorCoords }

    } = useContext(Context);

    const handleFloorSelect = e => {
        const targetFloor = e.target.dataset.floor;
        setSelectedFloor(targetFloor);
        setFloorCoords(toggleSelectFloor({ targetFloor, floorCoords }));
    };

    return (
        <ImageWrap>
            <Svg viewBox="0 0 734 640" xmlns="http://www.w3.org/2000/svg" className="show-floor">
                {floorCoords?.map(item =>
                    <FloorPath coord={item.d} floor={item.id} key={item.id}
                        handle={handleFloorSelect} active={item.active}/>
                )}
            </Svg>
        </ImageWrap>
    );
}
export default HomeImage