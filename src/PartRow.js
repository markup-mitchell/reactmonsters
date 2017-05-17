import React from 'react';
import PartBox from './PartBox';

function PartRow(props) {
  return (
    <div className='partRow'>
      {props.array.map(
        (partObj) => 
          <PartBox 
            id={partObj.name} // drag function selects on id
            key={partObj.name} // key is required by react
            handler={props.handler.bind(this)} 
            url={partObj.img} 
            alt={partObj.alt}
          />
        )
      }

    </div>
  )
}

export default PartRow;