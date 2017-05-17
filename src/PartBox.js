import React from 'react';

function PartBox(props) {
  return ( 
    <img id="drag1" src={props.url} draggable="true" onDragStart={props.handler} width="150" height="120" alt={props.alt}/>
  )
}

export default PartBox; 