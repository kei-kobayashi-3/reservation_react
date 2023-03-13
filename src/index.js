import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accept from "./kindNestDetail/accept";
import Change from "./kindNestDetail/change";
import Cancel from "./kindNestDetail/cancel";
import Content from './kindDetails/content';
import Time from './kindDetails/time';
import { consultationKinds } from './seed';

function Reservation(){

  return (
<div>
  <body>
    <h1>病院の診察時間を予約する</h1>
    <table>
      <thead>
        <tr>
          <th>受診内容</th>
          <th>診察可能時間</th>
          <th>受診内容詳細</th>
          <th>予約可能時間</th>
          <th>変更可能時間</th>
          <th>キャンセル可能時間</th>
        </tr>
      </thead>
      <tbody>
        {consultationKinds.map((kind) =>
          kind.consultingChoice.map((choice, i) =>
                  i === 0 ? (
                <tr key={choice.choiceId}>
                    <td rowSpan = {kind.consultingChoice.length}><Content name = {kind.name}/></td>
                    <td rowSpan = {kind.consultingChoice.length}><Time reservationTime = {kind.reservationTime}/></td>
                    <td> {choice.choiceName}</td>
                    <td><Accept choice = {choice.acceptList}/></td>
                    <td><Change choice = {choice.changeList}/></td>
                    <td><Cancel choice = {choice.cancelList}/></td>
                </tr>
                  ) : (
                  <tr key={choice.choiceId}>
                    <td> {choice.choiceName}</td>
                    <td><Accept choice = {choice.acceptList}/></td>
                    <td><Change choice = {choice.changeList}/></td>
                    <td><Cancel choice = {choice.cancelList}/></td>
                </tr>
                  )
        ))}
      </tbody>
    </table>
  </body>
</div>

  );
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Reservation />);
