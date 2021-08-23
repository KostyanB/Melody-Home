import React from 'react';
import DrawPath from './DrawPath';
import { SvgWrap } from './SvgElems';

const DrawSwg = ({ viewBox, className, elemCoords, handleField, showResult }) => {

    return (
        <SvgWrap viewBox={viewBox} className={className} xmlns="http://www.w3.org/2000/svg">
            {elemCoords?.map(item =>
                <DrawPath key={item.id}
                    coord={item.d}
                    elem={item.id}
                    handleField={handleField}
                    showResult={showResult}
                    active={item.active}/>
            )}
        </SvgWrap>
    );
}
export default DrawSwg;