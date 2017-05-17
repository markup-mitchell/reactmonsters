import React from 'react';

function DestBox(props) {
  return (
    <div className='destBox' onDrop={props.onDrop} onDragOver={props.allowDrop}></div>
  )
} 

export default DestBox;