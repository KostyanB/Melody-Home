import React from 'react';

const RepeatFloor = props => {
    let items = [];
    for (let i = 1; i <= props.count; i++) {
        items.push(props.children(i))
    }
    return <>{items}</>
}
export default RepeatFloor;
