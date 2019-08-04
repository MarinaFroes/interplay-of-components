export const START_GRAPHS: string = 'START_GRAPHS';
export const UPDATE_GRAPHS: string = 'UPDATE_GRAPHS';

interface startGraphsAction {
  type: typeof START_GRAPHS
  payload: {
    sliderValue: number[],
    dataObject: object
  }
}

interface updateGraphsAction {
  type: typeof UPDATE_GRAPHS
  payload: {
    sliderValue: number[],
    dataObject: object
  }
}

export type graphsActionsTypes = startGraphsAction | updateGraphsAction;