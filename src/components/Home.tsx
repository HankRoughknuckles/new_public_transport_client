import React, {useEffect, useRef, useState} from 'react';
import useInterval from '@use-it/interval';
import Simulator from '../lib/simulator';
import OldTram from '../lib/simulator/OldTram/OldTram';

export default function Home() {
  const [state, setState] = useState(0);
  const oldTrams = [
    new OldTram({})
  ];
  const newTrams = [
  ]
  const simulator = useRef(new Simulator());

  useInterval(() => {
    simulator.current.tick();
    setState(simulator.current.time);
  }, 1000)

  return (
    <div>
      <div>
        This is what home feels like - {state}
      </div>
    </div>
  );
}
