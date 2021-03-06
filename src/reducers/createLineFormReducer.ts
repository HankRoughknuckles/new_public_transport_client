import Segment from '../lib/simulator/Segment';
import factories from '../factories';

export interface CreateLineFormState {
  lineName: string;
  trackSegments: Segment[];
}

export const initialState: CreateLineFormState = {
  lineName: '',
  trackSegments: [],
}

interface SetLineNameAction {
  type: 'SET_LINE_NAME';
  lineName: string;
}

interface AddBlankTrackSegmentAction {
  type: 'ADD_BLANK_TRACK_SEGMENT';
  lineName: string;
}

interface SetTrackSegmentAction {
  type: 'SET_TRACK_SEGMENT';
  index: number;
  trackSegment: Segment
}

export type CreateLineFormAction = SetLineNameAction | AddBlankTrackSegmentAction | SetTrackSegmentAction

export default function createLineFormReducer(
  state: CreateLineFormState = initialState,
  action: CreateLineFormAction
): CreateLineFormState {
  return state;
  // switch(action.type) {
  //   case 'SET_LINE_NAME':
  //     return {...state, lineName: action.lineName};
  //   case 'ADD_BLANK_TRACK_SEGMENT':
  //     return {...state, trackSegments: [
  //       ...state.trackSegments,
  //       factories.blankTrackSegment(),
  //     ]};
  //   case 'SET_TRACK_SEGMENT':
  //     const newTrackSegments = [...state.trackSegments];
  //     newTrackSegments[action.index] = action.trackSegment;
  //     return {
  //       ...state,
  //       trackSegments: newTrackSegments,
  //     }
  //   default:
  //     return state
  // }
}
