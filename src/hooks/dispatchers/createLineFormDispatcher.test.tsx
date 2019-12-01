import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {Provider} from 'react-redux';

import configureStore from '../../store';
import factories from '../../factories';
import useCreateLineFormReducer from './useCreateLineFormReducer'
import {RootState, initialState as initialRootState} from '../../reducers/rootReducer';

function hookWithContext(initialState: RootState = initialRootState) {
  const contextWrapper = (props: {children?: React.ReactNode}) => (
    <Provider store={configureStore(initialState)}>{props.children}</Provider>
  );
  return renderHook(() => useCreateLineFormReducer(), {wrapper: contextWrapper});
};

describe('useCreateLineFormReducer', () => {
  describe('setLineName', () => {
    it('should set the line name inside the state', () => {
      const {result} = hookWithContext();
      act(() => { result.current[1].setLineName('asdfasdf') })

      expect(result.current[0].lineName).toEqual('asdfasdf');
    });
  });

  describe('addBlankTrackSegment', () => {
    it('should append a line segment to the end of the list', () => {
      const initialSegment = factories.trackSegment();
      const {result} = hookWithContext(
        factories.rootState({
          createLineForm: {
            lineName: 'some line',
            trackSegments: [initialSegment]
          }
        })
      );

      act(() => result.current[1].addBlankTrackSegment())

      expect(result.current[0].trackSegments).toEqual([
        initialSegment,
        factories.blankTrackSegment(),
      ]);
    });
  });
});
