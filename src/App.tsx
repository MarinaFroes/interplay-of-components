import React from 'react';
import './App.css';
// import MyResponsiveBar from './components/MyResponsiveBar';
import styled from 'styled-components';
import RangeSlider from './components/RangeSlider';
import { useDispatch } from 'react-redux';
import { startGraphs, updateGraphs } from './actions/actions';
import { store } from './components/store';

const Styles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BarContainer = styled.div`
  height: 500px;
  width: 700px;
`;

function App(): JSX.Element {
  // GET DATA FROM STORE
  // const completeStore = store.getState();
  // // console.log(completeStore);

  const storedDataObject = store.getState().dataObject;
  console.log(storedDataObject);

  const storedSliderValue = store.getState().sliderValue;
  console.log(storedSliderValue);

  const activityOccurrences = store.getState().activityOccurrences;
  console.log(activityOccurrences);
  
  // // ACTIONS
  const dispatch = useDispatch();
  const startAction = (activityOccurrences: any) => dispatch(startGraphs(activityOccurrences));
  const updateAction = (activityOccurrences: any, newValue: any) => dispatch(updateGraphs(activityOccurrences, newValue));

  const [sliderValue, setSliderValue] = React.useState<number[]>(storedSliderValue);

  // useEffect - allows us to combine componentDidMount and componentDidUpdate.
  React.useEffect(() => {
    console.log('useEffect called');
    console.log(storedSliderValue.length);
    console.log(Object.keys(storedDataObject).length);
    console.log(activityOccurrences);
    // || Object.keys(storedDataObject).length === 0
    if (storedSliderValue.length === 0 || Object.keys(storedDataObject).length === 0) {
      console.log('call start action');
      startAction(activityOccurrences);
    } else {
      console.log('call update action');
      updateAction(activityOccurrences, sliderValue);
    }
  }, []);

  // const [dataObject, setDataObject] = React.useState<object>('');

  const handleChange = (event: React.ChangeEvent<HTMLElement>, newValue: number[]): void => {
    setSliderValue(newValue);
  };
  
  return (
    <Styles>
      <BarContainer className="App">
        {/* <MyResponsiveBar data={[storedDataObject]}/> */}
      </BarContainer>
      <RangeSlider values={storedSliderValue} onChange={handleChange} max={activityOccurrences !== undefined ? activityOccurrences.length : 0}/> 
    </Styles>
  );
}

export default App;

