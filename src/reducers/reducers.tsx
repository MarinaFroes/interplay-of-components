import { START_GRAPHS, UPDATE_GRAPHS } from '../actions/actionTypes';

interface State {
  activityOccurrences: number[];
  sliderValue: number[];
  dataObject: object;
}

const initialState: State = {
  activityOccurrences: [84, 14, 234, 37, 64, 42, 197, 11],
  sliderValue: [],
  dataObject: {}
}

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case START_GRAPHS:
      return {
        ...state,
        sliderValue: action.payload.sliderValue,
        dataObject: action.payload.dataObject
      };
    case UPDATE_GRAPHS:
      return {
        ...state,
        sliderValue: action.payload.sliderValue,
        dataObject: action.payload.dataObject
      };
    default:
      return state;
  }
};

export default rootReducer;
