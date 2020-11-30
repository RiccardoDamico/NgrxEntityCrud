import {createAction, props} from '@ngrx/store';

export enum ActionTypes {
  INCREMENT = '[Counter] increment',
  DECREMENT = '[Counter] decrement',
  RESET = '[Counter] reset',
  CHANGE_B = '[Counter] Change b',
}

export const Increment = createAction(ActionTypes.INCREMENT);
export const Decrement = createAction(ActionTypes.DECREMENT);
export const Reset = createAction(ActionTypes.RESET);
export const ChangeB = createAction(ActionTypes.CHANGE_B, props<{ valueB: string }>());
