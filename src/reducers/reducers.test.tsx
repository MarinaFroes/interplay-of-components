import rootReducer from './reducers';
import { START_GRAPHS, UPDATE_GRAPHS } from '../actions/types';

describe('root reducer', () => {
 
  it('should handle graphs start', () => {
    expect(
      rootReducer({
        activityOccurrences: [84, 14, 234, 37, 64, 42, 197, 11],
        sliderValue: [],
        dataObject: {}
      }, {
        type: START_GRAPHS,
        payload: {
          sliderValue: [1, 8],
          dataObject: {
            "activity 1": 234,
            "activity 2": 197,
            "activity 3": 84,
            "activity 4": 64,
            "activity 5": 42,
            "activity 6": 37,
            "activity 7": 14,
            "activity 8": 11
          }
        }
      })
    ).toEqual({
        activityOccurrences: [84, 14, 234, 37, 64, 42, 197, 11],
        sliderValue: [1, 8],
        dataObject: {
          "activity 1": 234,
          "activity 2": 197,
          "activity 3": 84,
          "activity 4": 64,
          "activity 5": 42,
          "activity 6": 37,
          "activity 7": 14,
          "activity 8": 11
        }
      })    
  })
  
  it('should handle graphs update', () => {
    expect(
      rootReducer({
        activityOccurrences: [84, 14, 234, 37, 64, 42, 197, 11],
        sliderValue: [],
        dataObject: {}
      }, {
          type: UPDATE_GRAPHS,
          payload: {
            sliderValue: [1, 7],
            dataObject: {
              "activity 1": 234,
              "activity 2": 197,
              "activity 3": 84,
              "activity 4": 64,
              "activity 5": 42,
              "activity 6": 37,
              "activity 7": 14,
              "activity 8": 0
            }
          }
        })
    ).toEqual({
      activityOccurrences: [84, 14, 234, 37, 64, 42, 197, 11],
      sliderValue: [1, 7],
      dataObject: {
        "activity 1": 234,
        "activity 2": 197,
        "activity 3": 84,
        "activity 4": 64,
        "activity 5": 42,
        "activity 6": 37,
        "activity 7": 14,
        "activity 8": 0
      }
    })
  })
})