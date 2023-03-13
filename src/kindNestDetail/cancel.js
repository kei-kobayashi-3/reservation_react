import React from 'react';

function Cancel(props){
  return(
    <label>
      <select>
        {props.choice.map((op) =>
        <option key={op.pdId}>{op.pdName}</option>)}
      </select>
    </label>
  );
}

export default Cancel;
