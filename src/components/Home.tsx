import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {SHOW_LINES_ROUTE, CREATE_LINE_ROUTE} from '../utils/routes';


export default function Home() {
  const [state, setState] = useState(0);

  setTimeout(() => {
    console.log('hi')
  }, 1000)

  console.log("i'm here")
  return (
    <div>
      <div>
        This is what home feels like - {state}
      </div>
      <div><Link to={SHOW_LINES_ROUTE}>View Lines</Link></div>
      <div><Link to={CREATE_LINE_ROUTE}>Create Line</Link></div>
    </div>
  );
}
