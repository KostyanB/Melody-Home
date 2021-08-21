// import './App.css';
import React  from 'react';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { Context } from './Components/Functions/Context';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { useSelectedFloor } from './Components/Hooks/useSelectedFloor';
import { useFloorCoords } from './Components/Hooks/useFloorCoords';

function App() {
  const selectFloor = useSelectedFloor(),
    floorCoords = useFloorCoords();
  return (
    <Context.Provider value={{
      selectFloor,
      floorCoords
    }}>
    <GlobalStyle/>
    <Header/>
    <Main/>
    </Context.Provider>
  );
}

export default App;
