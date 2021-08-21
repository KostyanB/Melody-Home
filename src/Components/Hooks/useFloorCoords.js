import { useEffect, useState, useCallback } from 'react';

export const useFloorCoords = () => {
    const [ floorCoords, setFloorCoords ] = useState(null);
    const [ error, setError ] = useState(null);

    const getFetch = useCallback(async () => {
        try {
            const result = await fetch('db/floorCoords.json');
            const res = await result.json();
            setFloorCoords(res);
        } catch (err) {
            setError(err);
        }
    }, [setFloorCoords]);

    useEffect(() => getFetch(), [getFetch]);

    return { floorCoords, setFloorCoords, error }
}