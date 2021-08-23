import styled from 'styled-components';
import closeImg from '../../img/close.svg';

export const CloseButton = styled.button`
    background-image: url(${closeImg});
    background-size: cover;
    background-color: transparent;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 38px;
    right: 27px;
`;