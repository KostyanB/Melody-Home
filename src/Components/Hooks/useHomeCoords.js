import { useEffect, useState, useCallback } from 'react';

export const useHomeCoords = () => {
    const [ floorCoords, setFloorCoords ] = useState(null);
    const [ aptsCoords, setAptsCoords ] = useState(null);
    const [ currentApt, setCurrentApt ] = useState(null);

    const [ error, setError ] = useState(null);

    const handleShowApt= apt => {
        // const index = apt - 2;
        setCurrentApt(aptsCoords[apt]);
    };

    const handleApts = floor => {
        const index = floor - 2;
        setAptsCoords(floorCoords[index]);
    };

    const getFetch = useCallback(async () => {
        try {
            const result = await fetch('db/homeCoords.json');
            const res = await result.json();
            setFloorCoords(res);
            setAptsCoords(res[0]);
        } catch (err) {
            setError(err);
        }
    }, []);

    useEffect(() => getFetch(), [getFetch]);

    return { floorCoords, setFloorCoords, aptsCoords, setAptsCoords, handleApts, currentApt, handleShowApt, error }
}