import React from 'react';
import DestBox from './DestBox';

function DestGrid(props) {
  return(
    <div className='destGrid'>
        <DestBox id='headDest' onDrop={props.onDrop} allowDrop={props.allowDrop}/>
        <DestBox id='torsoDest' onDrop={props.onDrop} allowDrop={props.allowDrop}/>
        <DestBox id='arm1Dest' onDrop={props.onDrop} allowDrop={props.allowDrop}/>
        <DestBox id='arm2Dest' onDrop={props.onDrop} allowDrop={props.allowDrop}/>
        <DestBox id='leg1Dest' onDrop={props.onDrop} allowDrop={props.allowDrop}/>
        <DestBox id='leg2Dest' onDrop={props.onDrop.bind(this)} allowDrop={props.allowDrop.bind(this)}/>
    </div>
  )
}

export default DestGrid;