import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { useSelector, useDispatch } from 'react-redux';
import { startGraphs, updateGraphs } from '../actions/actions';

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

function RangeSlider(): JSX.Element {
  // GET STORE DATA
  const data: any = useSelector(state => state);
  const activityOccurrences = data.activityOccurrences;
  
  // SET INITIAL STATE
  const [sliderValue, setSliderValue] = React.useState<number[]>([1, activityOccurrences.length]);

  // ACTIONS
  const dispatch = useDispatch();
  const startAction = (activityOccurrences: any) => dispatch(startGraphs(activityOccurrences));
  const updateAction = (activityOccurrences: any, newValue: any) => dispatch(updateGraphs(activityOccurrences, newValue));

  // useEffect - combines componentDidMount() and componentDidUpdate()
  React.useEffect(() => {
    if (sliderValue.length === 0 || Object.keys(data.dataObject).length === 0) {
      startAction(activityOccurrences);
    } else {
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