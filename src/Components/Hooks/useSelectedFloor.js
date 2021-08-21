import { useState, useEffect } from 'react';

export const useSelectedFloor = () => {
    const [ selectedFloor, setSelectedFloor ] = useState();

    useEffect(() => setSelectedFloor('02'), []);

    return { selectedFloor, setSelectedFloor };
}