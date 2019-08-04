import { START_GRAPHS, UPDATE_GRAPHS } from './actionTypes';

export function startGraphs(activityOccurrences: number[]): any {
  const newValue: number[] = [1, activityOccurrences.length];
  const newObject: { [key: string]: number } = {};
  activityOccurrences.sort((a, b) => b - a);
  
  for (let i = 0; i < activityOccurrences.length; i++) {
    newObject[`activity ${i + 1}`] = activityOccurrences[i];
  }
  return {
    type: START_GRAPHS,
    payload: {
      sliderValue: newValue,
      dataObject: newObject
    }
  }
}

export function updateGraphs(activityOccurrences: number[], newValue: number[]): any {
  const newData: number[] = activityOccurrences.slice(newValue[0] - 1, newValue[1]);
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
      sliderValue: newValue,
      dataObject: newObject
    }
  }
}
