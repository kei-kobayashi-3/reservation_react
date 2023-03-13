import React,{ useRef, useState, useEffect } from 'react';

function Accept(props){

  return(
    <label>
      <select>
        {props.choice.map((op) =>
        <option key={op.pdId}>{op.pdName}</option>)}
      </select>
    </label>
  );
}

export default Accept;
