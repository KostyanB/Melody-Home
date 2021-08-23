

const toggleSelectPath = (elem, сoords) => {

    return сoords.map(item => {
        if (item.active) item.active = !item.active
        return item;
    })
        .map(item => {
        if (item.id === elem) item.active = !item.active
        return item;
    });
};
export default toggleSelectPath;