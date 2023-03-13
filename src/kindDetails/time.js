import React, {useState} from 'react';

function Time(props){
  const amFrom = props.reservationTime.amFrom;
  const amTo = props.reservationTime.amTo;
  const pmFrom = props.reservationTime.pmFrom;
  const pmTo = props.reservationTime.pmTo;

  return(
    <div>
      <label htmlFor="meeting-time">午前 </label>
      <div className='inputTime'>
        <TimeInput initialize = {amFrom} />〜
        <TimeInput initialize = {amTo} />
      </div>
      <div className='inputTime_after'>
      <label htmlFor="meeting-time">午後 </label>
        <TimeInput initialize = {pmFrom} />〜
        <TimeInput initialize = {pmTo} />
      </div>
    </div>
  );
}

function TimeInput(props){
  const [selectedTime, setSelectedTime] = useState(props.initialize);
  return(
    <div className='inputTime'>
      <input
        type="time"
        required
        defaultValue={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      />
    </div>
  );
}
export default Time;
