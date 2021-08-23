import { useState } from 'react';

export const useSelectedApt = () => {
    const [ selectedApt, setSelectedApt ] = useState();

    return { selectedApt, setSelectedApt };
}