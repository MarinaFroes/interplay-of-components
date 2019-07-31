import React from 'react';
import './App.css';
import MyResponsiveBar from './components/MyResponsiveBar';
import styled from 'styled-components';
import { data } from './components/data';

const BarContainer = styled.div`
  height: 500px;
  width: 700px;
`;

function App() {
  return (
    <BarContainer className="App">
      <MyResponsiveBar data={data}/>
    </BarContainer>
  );
}

export default App;
