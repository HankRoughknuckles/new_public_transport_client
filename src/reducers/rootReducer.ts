import {combineReducers} from 'redux';
import createLineFormReducer, {initialState as createLineFormInitialState, CreateLineFormState, CreateLineFormAction} from './createLineFormReducer';

export interface RootState {
  createLineForm: CreateLineFormState
}

export const initialState: RootState = {
  createLineForm: createLineFormInitialState
}

export type RootAction = CreateLineFormAction

export const rootReducer = combineReducers({
  createLineForm: createLineFormReducer
});
export default rootReducer
