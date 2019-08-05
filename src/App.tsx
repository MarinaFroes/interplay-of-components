import React from 'react';
import './App.css';
import MyResponsiveBar from './components/MyResponsiveBar';
import styled from 'styled-components';
import RangeSlider from './components/RangeSlider';

const Styles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BarContainer = styled.div`
  width: 60vw;
  max-width: 700px;
  height: 50vh;
`;

const Heading = styled.h1`
  font-size: 1rem;
  margin-top: 2rem;
`;

function App(): JSX.Element {
  return (
    <Styles>
      <Heading>Activities x Occurrences</Heading>
      <BarContainer className="App">
        <MyResponsiveBar />
      </BarContainer>
      <RangeSlider /> 
    </Styles>
  );
}

export default App;

