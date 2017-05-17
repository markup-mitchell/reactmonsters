import React from 'react';
import PartRow from './PartRow';

function PartGrid(props) {
  return(
    <div className='partGrid'>
      <PartRow array={props.array} handler={props.handler} /> 
      <PartRow array={props.array} handler={props.handler} /> 
      <PartRow array={props.array} handler={props.handler} /> 
      <PartRow array={props.array} handler={props.handler} /> 
    </div> 
  )
}
 
 export default PartGrid;