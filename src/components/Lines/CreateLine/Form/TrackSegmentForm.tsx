import React, {useState, useEffect} from 'react';
import {TrackSegment} from '../../../../api';
import {useCreateLineFormReducer} from '../../../../hooks/dispatchers';

interface Props {
  trackSegment: TrackSegment;
  index: number;
}

export default function CreateLine({trackSegment, index}: Props) {
  const [, {setTrackSegment}] = useCreateLineFormReducer();
  const [startName, setStartName] = useState('');
  const [endName, setEndName] = useState('');
  const [travelTimeInSeconds, setTravelTimeInSeconds] = useState(-1);

  useEffect(() => {
    setTrackSegment(index, {
      start: {name: startName},
      end: {name: endName},
      travelTimeInSeconds,
    })
  }, [index, startName, endName, travelTimeInSeconds, setTrackSegment])

  return (
    <div>
      <label>
        Stop {index}:
        <input type="text" name="start" placeholder="Station Name..." onChange={(e) => setStartName(e.currentTarget.value)} />
      </label>
      <label>
        Stop {index + 1}:
        <input type="text" name="end" placeholder="Station Name..." onChange={(e) => setEndName(e.currentTarget.value)} />
      </label>
      <label>
        How long does it take (in minutes)?
        <input type="text" name="travelTimeInSeconds" placeholder="Station Name..." onChange={(e) => setTravelTimeInSeconds(Number(e.currentTarget.value) * 60)} />
      </label>
    </div>
  );
}
