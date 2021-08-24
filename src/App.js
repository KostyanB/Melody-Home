// import './App.css';
import React  from 'react';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { Context } from './Components/Functions/Context';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import { LoadError } from './Components/Errors/LoadError';
import { useSelectedFloor } from './Components/Hooks/useSelectedFloor';
import { useOpenModal } from './Components/Hooks/useOpenModal';
import { useHomeCoords } from './Components/Hooks/useHomeCoords';
import { useSelectedApt } from './Components/Hooks/useSelectedApt';


function App() {
  const selectFloor = useSelectedFloor(),
    modalOpen = useOpenModal(),
    coordsHome = useHomeCoords(),
    selectApt = useSelectedApt();

  return (
    <Context.Provider value={{
      selectFloor,
      modalOpen,
      coordsHome,
      selectApt,
    }}>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
      <Modal/>
      {coordsHome.error &&
        <LoadError>Ошибка сервера. Обновите страницу или попробуйте позже</LoadError>}
      {/* {(modalOpen.openModal) && <Modal/>} */}
    </Context.Provider>
  );
}

export default App;
