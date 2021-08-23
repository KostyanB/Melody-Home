import React from 'react';
import { SvgPath } from './SvgElems';

const DrawPath = ({ coord, elem, handleField, showResult, active }) => (
    <SvgPath d={coord}
        data-elem={elem}
        className={(active) && "active-path"}
        onPointerOver={e => handleField(e.target.dataset.elem)}
        onClick={() => {

            showResult(elem)}}
    />
)
export default DrawPath;
