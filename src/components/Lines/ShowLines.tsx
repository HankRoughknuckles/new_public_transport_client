import React from 'react';
import {Link} from 'react-router-dom';
import {HOME_ROUTE, CREATE_LINE_ROUTE} from '../../utils/routes';

export default function ShowLines() {
  return (
    <div>
      <div><Link to={HOME_ROUTE}>Home</Link></div>
      <div>Lines for miles...</div>
      <Link to={CREATE_LINE_ROUTE}>Create Line</Link>
    </div>
  );
}
