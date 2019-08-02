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

interface SliderProps {
  values: number[];
  onChange: (event: React.ChangeEvent<{}>, newValue: number[]) => void;
  max: number;
}

/*
onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
   const newValue = e.target.value;
}
 */

function RangeSlider(props: SliderProps) {
  const { values, onChange, max } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ActivitySlider
        ThumbComponent={ActivitySliderThumbComponent}
        aria-label="range-slider"
        defaultValue={values}
        onChange={onChange}
        valueLabelDisplay="on"
        marks={true}
        max={max}
        min={1}
      />
    </div>
  );
}

// RangeSlider.propTypes = {
//   ThumbComponent: PropTypes.func.isRequired,
//   defaultValue: PropTypes.array.isRequired,
//   onChange: PropTypes.func.isRequired,
//   valueLabelDisplay: PropTypes.string,
//   marks: PropTypes.bool,
//   max: PropTypes.number,
//   min: PropTypes.number
// }

// interface ActivityProps {
//     first_name: string;
//     last_name: string;
//     age: number;
//     agreetoterms?: boolean;
// }

export default RangeSlider;