import {useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {CreateLineFormState} from '../../reducers/createLineFormReducer';
import {RootState} from '../../reducers/rootReducer';
import Segment from '../../lib/simulator/Segment';

interface Dispatcher {
  setLineName: (lineName: string) => void;
  addBlankTrackSegment: () => void;
  setTrackSegment: (index: number, trackSegment: Segment) => void;
}

export default function useCreateLineFormDispatcher(): [CreateLineFormState, Dispatcher] {
  const createLineFormState = useSelector((state: RootState) => state.createLineForm)
  const dispatch = useDispatch();

  const dispatchers = useMemo(() => ({
    setLineName(lineName: string) {
      dispatch({type: 'SET_LINE_NAME', lineName})
    },
    addBlankTrackSegment() {
      dispatch({type: 'ADD_BLANK_TRACK_SEGMENT'})
    },
    setTrackSegment(index: number, trackSegment: Segment) {
      dispatch({type: 'SET_TRACK_SEGMENT', index, trackSegment})
    }
  }), [dispatch])

  return [createLineFormState, dispatchers];
}
