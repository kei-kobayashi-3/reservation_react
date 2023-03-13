import Detail from "./kindNestDetail/detail";
import Accept from "./kindNestDetail/accept";
import Change from "./kindNestDetail/change";
import Cancel from "./kindNestDetail/cancel";

function MedicalNestedRow(props){

  return(
    <>
      <td><Detail choice = {props.consultingChoice}/></td>
      <td><Accept/></td>
      <td><Change/></td>
      <td><Cancel/></td>
    </>
  )
}
export default MedicalNestedRow;
