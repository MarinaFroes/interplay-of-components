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
const initialData: number[] = [84, 14, 234, 37, 64, 42, 197, 11];
initialData.sort((a, b) => b - a);

const initialDataObject: { [key: string]: number } = {};

let sliderKeys: string[];

// Populating initialDataObject and sliderKeys variable
(function (initialData: number[]): object {
  for (let i = 0; i < initialData.length; i++) {
    initialDataObject[`activity ${i + 1}`] = initialData[i];
  }
  sliderKeys = Object.keys(initialDataObject);
  return initialDataObject;
})(initialData);

type ChangeSlider = React.ChangeEvent<HTMLElement>;

function App(): JSX.Element {
  const [sliderValue, setSliderValue] = React.useState<number[]>([1, initialData.length]);
  React.useEffect(() => { getData(initialData, sliderValue) }, [sliderValue]);

  const [dataObject, setDataObject] = React.useState<object>(initialDataObject);

  const getData = (initialData: number[], newValue: number[]): void => {
    let newData: number[] = initialData.slice(newValue[0] - 1, newValue[1]);
    
    const newObject: { [key: string]: number } = {};

    for (let i = 0; i < initialData.length; i++) {
      if (newData.includes(initialData[i])) {
        newObject[`activity ${i + 1}`] = initialData[i];
      } else {
        // TODO: Change color of the bar instead of hiding it
        newObject[`activity ${i + 1}`] = 0;
      }
    }

    setDataObject(newObject);
  }

  const handleChange = (event: ChangeSlider, newValue: number[]): void => {
    setSliderValue(newValue);
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

