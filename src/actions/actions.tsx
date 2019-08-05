import { graphsActionsTypes, START_GRAPHS, UPDATE_GRAPHS } from './types';

export function startGraphs(activityOccurrences: number[]): graphsActionsTypes {
  const newSliderValue: number[] = [1, activityOccurrences.length];
  const newObject: { [key: string]: number } = {};
  activityOccurrences.sort((a, b) => b - a);
  
  for (let i = 0; i < activityOccurrences.length; i++) {
    newObject[`activity ${i + 1}`] = activityOccurrences[i];
  }
  return {
    type: START_GRAPHS,
    payload: {
      sliderValue: newSliderValue,
      dataObject: newObject
    }
  }
}

export function updateGraphs(activityOccurrences: number[], newSliderValue: number[]): graphsActionsTypes {
  const newData: number[] = activityOccurrences.slice(newSliderValue[0] - 1, newSliderValue[1]);
  const newObject: { [key: string]: number } = {};

  for (let i = 0; i < activityOccurrences.length; i++) {
    if (newData.includes(activityOccurrences[i])) {
      newObject[`activity ${i + 1}`] = activityOccurrences[i];
    } else {
      newObject[`activity ${i + 1}`] = 0;
    }
  }

  return {
    type: UPDATE_GRAPHS,
    payload: {
      sliderValue: newSliderValue,
      dataObject: newObject
    }
  }
}
