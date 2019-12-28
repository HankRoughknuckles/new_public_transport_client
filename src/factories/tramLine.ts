import { segment } from './segment';
import { station } from './station';
import TramLine from '../lib/simulator/TramLine';

const defaultProps = {
  id: 1,
  name: 'exampleLine',
  segments: [],
}

export function tramLine(props: Partial<TramLine> = {}) {
  return new TramLine({
    ...defaultProps,
    ...props,
  });
}
export function threeStationLine(props: Partial<TramLine> = {}) {
  const station1 = station({id: 1});
  const station2 = station({id: 2});
  const station3 = station({id: 3});
  const segment12 = segment({id: 12, stationId: station1.id, neighborStationId: station2.id});
  const segment23 = segment({id: 23, stationId: station2.id, neighborStationId: station3.id});

  return tramLine({
    segments: [segment12, segment23],
    ...props,
  });
}

export default {
  tramLine,
};
