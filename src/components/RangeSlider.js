import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


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
      // display: inline-block !important;
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

function ActivitySliderThumbComponent(props) {
  return (
    <span {...props} />
  );
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([10, 60]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  
  return (
    <div className={classes.root}>
      <ActivitySlider
        ThumbComponent={ActivitySliderThumbComponent}
        aria-label="range-slider"
        defaultValue={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        marks={true}
        step={1}
        max={6}
        min={0}
      />
    </div>
  );
}
