import React from 'react';
import {useSelector} from 'react-redux';
import {useCreateLineFormReducer} from '../../../../hooks/dispatchers';

export default function CreateLine() {
  const [{trackSegments}, {setLineName}] = useCreateLineFormReducer();

  return null;
  // return (
  //   <>
  //     <div>
  //       <label>
  //         Line Name:
  //         <input
  //           type="text"
  //           id="lineName"
  //           name="lineName"
  //           value={lineName}
  //           onChange={(e) => setLineName(e.currentTarget.value)}
  //           placeholder="Name / Number of the Line..."
  //         />
  //       </label>
  //     </div>
  //     <div>
  //       {trackSegments.map((trackSegment, i) => <TrackSegmentForm trackSegment={trackSegment} index={i} />
  //       <label>
  //         Stop 1:
  //         <input type="text" name="start" placeholder="Station Name..." />
  //       </label>
  //       <label>
  //         Stop 2:
  //         <input type="text" name="end" placeholder="Station Name..." />
  //       </label>
  //       <label>
  //         How long does it take (in minutes)?
  //         <input type="text" name="travelTimeInSeconds" placeholder="Station Name..." />
  //       </label>
  //     </div>
  //     <button>Add a stop</button>
  //   </>
  // );
}
