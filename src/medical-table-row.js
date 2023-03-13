import React from 'react';
import Content from './kindDetails/content';
import Time from './kindDetails/time';
import MedicalNestedRow from './medical-nested-row';

function MedicalTableRow(props) {
  return (
    <tr>
      <td rowSpan = {props.consultationKind.consultingChoice.length}><Content name = {props.consultationKind.name}/></td>
      <td ><Time reservationTime = {props.consultationKind.reservationTime}/></td>
      <tr>{props.consultationKind.consultingChoice.map((choice) => {
        return <MedicalNestedRow key = {choice.choiceId} consultingChoice = {choice}/>
      })}
      </tr>
    </tr>
  );
}
export default MedicalTableRow;
