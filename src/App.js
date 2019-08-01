import React from 'react';
import './App.css';
import MyResponsiveBar from './components/MyResponsiveBar';
import styled from 'styled-components';
import { data } from './components/data';
import RangeSlider from './components/RangeSlider';

const Styles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BarContainer = styled.div`
  height: 500px;
  width: 700px;
`;

function App() {
  return (
    <Styles>
      <BarContainer className="App">
        <MyResponsiveBar data={data}/>
      </BarContainer>
      <RangeSlider />
    </Styles>
  );
}

export default App;
