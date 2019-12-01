import {RootState, initialState} from '../reducers/rootReducer';
const deepMerge = require('deepmerge');

export function rootState(props: Partial<RootState> = {}): RootState {
  return deepMerge(initialState, props);
}

export default {
  rootState
}
