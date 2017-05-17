import React from 'react';

function PartBox(props) {
  return ( 
    <img className='partBox' id={props.id} key={props.id} src={props.url} draggable="true" onDragStart={props.handler} width="150" height="120" alt={props.alt}/>
  )
}

export default PartBox; 