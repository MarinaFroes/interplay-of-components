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
const initialData = [194, 190, 172, 151, 134, 80, 34, 20];

const initialDataObject = {};

let sliderKeys;

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

  const getData = (initialData, newValue) => {
    let newData = initialData.slice(newValue[0] - 1, newValue[1]);
    console.log(`new data: ${newData}`);

    const newObject = {};

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

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
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
