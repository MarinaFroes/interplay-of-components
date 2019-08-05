import { startGraphs, updateGraphs } from './actions';
import { START_GRAPHS, UPDATE_GRAPHS } from './types';

describe('actions', () => {
  it('should create an action to start graphs', () => {
    const activityOccurrences = [20, 10, 5];
    const expectedAction = {
      type: START_GRAPHS,
      payload: {
        sliderValue: [1, 3],
        dataObject: {
          "activity 1": 20,
          "activity 2": 10,
          "activity 3": 5
        }
      }
    }
    expect(startGraphs(activityOccurrences)).toEqual(expectedAction);
  })

  it('should create an action to update graphs', () => {
    const activityOccurrences = [20, 10, 5];
    const newSliderValue = [1, 2];
    const expectedAction = {
      type: UPDATE_GRAPHS,
      payload: {
        sliderValue: [1, 2],
        dataObject: {
          "activity 1": 20,
          "activity 2": 10,
          "activity 3": 0
        }
      }
    }
    expect(updateGraphs(activityOccurrences, newSliderValue)).toEqual(expectedAction);
  })
})
