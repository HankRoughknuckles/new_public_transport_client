import Passenger, {ApiPassenger} from '../lib/simulator/Passenger';
import {delnickaStation, maninyStation} from './station';

const defaultProps: ApiPassenger = {
  currentLocation: maninyStation(),
  destination: delnickaStation(),
}

export function passenger(props: Partial<ApiPassenger> = defaultProps): Passenger {
  return new Passenger({...defaultProps, ...props});
}

export default {
  passenger,
}
