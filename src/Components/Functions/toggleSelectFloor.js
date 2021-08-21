

const toggleSelectFloor = ({ targetFloor, floorCoords }) => {

    return floorCoords.map(item => {
        if (item.active) item.active = !item.active
        return item;
    })
        .map(item => {
        if (item.id === targetFloor) item.active = !item.active
        return item;
    });
};
export default toggleSelectFloor;