import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import homeImg from '../../img/home.png';
import { ImgWrapper } from '../Styled/ImgWrapper';
import DrawSvg from '../SvgDraw/DrawSvg';

const HomeBlockWrap = styled.div`
    grid-column: 1/span 7;
    @media (max-width: 768px) {
        grid-column: 1/span 12;
    }
`;
const ImageWrapper = styled(ImgWrapper)`
    max-width: 740px;
    background-image: url(${homeImg});
`;

const HomeBlock = ({ showResult, handleFloorSelect }) => {

    const { coordsHome: { floorCoords } } = useContext(Context);

    return (
        <HomeBlockWrap>
            <ImageWrapper>
                <DrawSvg viewBox="0 0 734 640"
                    className="show-floor"
                    elemCoords={floorCoords}
                    handleField={handleFloorSelect}
                    showResult={showResult}/>
            </ImageWrapper>
        </HomeBlockWrap>
    );
}
export default HomeBlock;
