import React from 'react';
import './App.css';
import MyResponsiveBar from './components/MyResponsiveBar';
import styled from 'styled-components';
// import { data } from './components/data';
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

const initialData = [194, 190, 172, 151, 134, 80];

const initialDataObject = {
  "activity 1": initialData[0],
  "activity 2": initialData[1],
  "activity 3": initialData[2],
  "activity 4": initialData[3],
  "activity 5": initialData[4],
  "activity 6": initialData[5],
}

function App() {
  const [value, setValue] = React.useState([1, 6]);
  // const [activityData, setActivityData] = React.useState(initialData);
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
    setValue(newValue);
    console.log(`value: ${newValue}`);
  };
  
  React.useEffect(() => { getData(initialData, value) }, [value]);

  return (
    <Styles>
      <BarContainer className="App">
        <MyResponsiveBar data={[dataObject]}/>
      </BarContainer>
      <RangeSlider values={value} onChange={handleChange} />
    </Styles>
  );
}

export default App;
