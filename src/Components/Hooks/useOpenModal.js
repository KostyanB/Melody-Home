import { useEffect, useState } from 'react';

export const useOpenModal = () => {
    const [ openModal, setOpenModal ] = useState();

    useEffect(() => setOpenModal(''), [])

    return { openModal, setOpenModal };
}