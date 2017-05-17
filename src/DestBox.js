import React from 'react';

function DestBox(props) {
  return (
    <div className='destBox' id={props.id} onDrop={props.onDrop} onDragOver={props.allowDrop}></div>
  )
} 

export default DestBox;