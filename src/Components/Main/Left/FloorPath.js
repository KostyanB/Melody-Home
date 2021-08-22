import React from 'react';
import styled from 'styled-components';

const Path = styled.path`
    fill: #3595F6;
    fill-opacity: 0.75;
`;
const FloorPath = ({ coord, floor, handle, active }) => {

    // const pathRef = useRef();
    return (
        <Path d={coord} data-floor={floor} className={(active) && "active-path"} onPointerOver={e => handle(e)}/>
        // <Path d={coord} data-floor={floor} ref={pathRef} onClick={() => handle(pathRef)}/>
    );
}
export default FloorPath;
