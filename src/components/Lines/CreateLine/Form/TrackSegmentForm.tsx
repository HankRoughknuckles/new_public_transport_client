import React, {useState, useEffect} from 'react';

import {useCreateLineFormReducer} from '../../../../hooks/dispatchers';
import Segment from '../../../../lib/simulator/Segment';

interface Props {
  trackSegment: Segment;
  index: number;
}

export default function CreateLine({trackSegment, index}: Props) {
  const [, {setTrackSegment}] = useCreateLineFormReducer();
  const [startName, setStartName] = useState(-1);
  const [endName, setEndName] = useState(-1);
  const [travelTimeInSeconds, setTravelTimeInSeconds] = useState(-1);

  useEffect(() => {
    // setTrackSegment(index, {
    //   id: -1,
    //   stationId: startName,
    //   neighborStationId: endName,
    //   secondsToNeighbor: travelTimeInSeconds,
    // })
  }, [index, startName, endName, travelTimeInSeconds, setTrackSegment])

  return (
    <div>
      <label>
        Stop {index}:
        <input type="text" name="start" placeholder="Station Name..." onChange={(e) => setStartName(parseInt(e.currentTarget.value))} />
      </label>
      <label>
        Stop {index + 1}:
        <input type="text" name="end" placeholder="Station Name..." onChange={(e) => setEndName(parseInt(e.currentTarget.value))} />
      </label>
      <label>
        How long does it take (in minutes)?
        <input type="text" name="travelTimeInSeconds" placeholder="Station Name..." onChange={(e) => setTravelTimeInSeconds(Number(e.currentTarget.value) * 60)} />
      </label>
    </div>
  );
}
