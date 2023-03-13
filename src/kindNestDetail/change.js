import React from 'react';

function Change(props){
  return(
    <label>
      <select>
        {props.choice.map((op) =>
        <option key={op.pdId}>{op.pdName}</option>)}
      </select>
    </label>
  );
}

export default Change;
