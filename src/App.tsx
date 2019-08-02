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
  height: 500px;
  width: 700px;
`;

// TODO: Change hard-coded data
const initialData = [84, 14, 234, 37, 64, 42, 197, 11];
initialData.sort((a, b) => b - a);

const initialDataObject: any = {};

let sliderKeys: string[];

// Populating initialDataObject and sliderKeys variable
(function (initialData) {
  for (let i = 0; i < initialData.length; i++) {
    initialDataObject[`activity ${i + 1}`] = initialData[i];
  }
  sliderKeys = Object.keys(initialDataObject);
  return initialDataObject;
})(initialData);

function App() {
  const [sliderValue, setSliderValue] = React.useState([1, initialData.length]);
  React.useEffect(() => { getData(initialData, sliderValue) }, [sliderValue]);

  const [dataObject, setDataObject] = React.useState(initialDataObject);

  const getData = (initialData: number[], newValue: number[]): void => {
    let newData: number[] = initialData.slice(newValue[0] - 1, newValue[1]);
    console.log(`new data: ${newData}`);

    const newObject: any = {};

    for (let i = 0; i < initialData.length; i++) {
      if (newData.includes(initialData[i])) {
        newObject[`activity ${i + 1}`] = initialData[i];
      } else {
        // TODO: Change color of the bar instead of hiding it
        newObject[`activity ${i + 1}`] = 0;
      }
    }
    console.log(newObject);
    setDataObject(newObject);
  }

  const handleChange = (event: any, newValue: any) => {
    setSliderValue(newValue);
    console.log(event);
    console.log(`value: ${newValue}`);
  };
  
  return (
    <Styles>
      <BarContainer className="App">
        <MyResponsiveBar data={[dataObject]} keys={sliderKeys}/>
      </BarContainer>
      <RangeSlider values={sliderValue} onChange={handleChange} max={initialData.length}/>
    </Styles>
  );
}

export default App;

