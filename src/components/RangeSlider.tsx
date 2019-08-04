import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { useSelector, useDispatch } from 'react-redux';
import { startGraphs, updateGraphs } from '../actions/actions';
import { store } from './store';

const useStyles = makeStyles({
  root: {
    width: 400,
    padding: 30,
  },
});

const ActivitySlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -8,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus,&:hover,&$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 10px)',
  },
  track: {
    height: 10,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 10,
  },
})(Slider);

function ActivitySliderThumbComponent(props: any) {
  return (
    <span {...props} />
  );
}

function RangeSlider() {
  // GET STORE DATA
  const data: any = useSelector(state => state);

  const activityOccurrences = data.activityOccurrences;

  const storedDataObject = data.dataObject;

  const storedSliderValue = data.sliderValue;
  
  // SET INITIAL STATE
  const [sliderValue, setSliderValue] = React.useState<number[]>([1, activityOccurrences.length]);

  // // ACTIONS
  const dispatch = useDispatch();
  const startAction = (activityOccurrences: any) => dispatch(startGraphs(activityOccurrences));
  const updateAction = (activityOccurrences: any, newValue: any) => dispatch(updateGraphs(activityOccurrences, newValue));

  React.useEffect(() => {
    console.log('useEffect called');
    console.log(storedSliderValue.length);
    console.log(Object.keys(storedDataObject).length);
    console.log(activityOccurrences);
    // || Object.keys(storedDataObject).length === 0
    if (storedSliderValue.length === 0 || Object.keys(storedDataObject).length === 0) {
      console.log('call start action');
      startAction(activityOccurrences);
      console.log(`store: ${store.getState().sliderValue}`);
    } else {
      console.log('call update action');
      updateAction(activityOccurrences, sliderValue);
    }
  }, [sliderValue]);

  const handleChange = (event: any, newValue: any): void => {
    setSliderValue(newValue);
  };
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ActivitySlider
        ThumbComponent={ActivitySliderThumbComponent}
        aria-label="range-slider"
        defaultValue={sliderValue}
        onChange={handleChange}
        valueLabelDisplay="on"
        marks={true}
        max={activityOccurrences.length}
        min={1}
      />
    </div>
  );
}

export default RangeSlider;