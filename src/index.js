import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MedicalTableRow from './medical-table-row';

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
        {consultationKinds.map((kind) => {
          return <MedicalTableRow key={kind.id} consultationKind = {kind}/>;
        })}
      </tbody>
    </table>
  </body>
</div>

  );
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Reservation />);

const consultationKinds = [
  {
    id: 1,
    name: "診察",
    reservationTime: { amFrom: "11:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
    consultingChoice: [
      {
        choiceId: 1,
        choiceName: "",
        acceptList: [
            {pdId: 1, pdName: "1時間前まで"},
            {pdId: 2, pdName: "いつでも可能"},
            {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
            {pdId: 4, pdName: "自由に入力してください"},
          ],
        changeList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
        cancelList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
      },
    ],
  },
  {
    id: 2,
    name: "予防接種",
    reservationTime: { amFrom: "11:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
    consultingChoice: [
      {
        choiceId: 1,
        choiceName: "4種混合",
        acceptList: [
            {pdId: 1, pdName: "1時間前まで"},
            {pdId: 2, pdName: "いつでも可能"},
            {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
            {pdId: 4, pdName: "自由に入力してください"},
          ],
        changeList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
        cancelList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
      },
      {
        choiceId: 2,
        choiceName: "MR(麻疹、風疹)",
        acceptList: [
            {pdId: 1, pdName: "1時間前まで"},
            {pdId: 2, pdName: "いつでも可能"},
            {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
            {pdId: 4, pdName: "自由に入力してください"},
          ],
        changeList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
        cancelList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
      },
      {
        choiceId: 3,
        choiceName: "ポリオ(不活性)",
        acceptList: [
            {pdId: 1, pdName: "1時間前まで"},
            {pdId: 2, pdName: "いつでも可能"},
            {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
            {pdId: 4, pdName: "自由に入力してください"},
          ],
        changeList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
        cancelList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
      },
      {
        choiceId: 4,
        choiceName: "Hib",
        acceptList: [
            {pdId: 1, pdName: "1時間前まで"},
            {pdId: 2, pdName: "いつでも可能"},
            {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
            {pdId: 4, pdName: "自由に入力してください"},
          ],
        changeList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
        cancelList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
      },
      {
        choiceId: 5,
        choiceName: "肺炎球菌",
        acceptList: [
            {pdId: 1, pdName: "1時間前まで"},
            {pdId: 2, pdName: "いつでも可能"},
            {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
            {pdId: 4, pdName: "自由に入力してください"},
          ],
        changeList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
        cancelList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
      },
    ],
  },
  {
    id: 3,
    name: "健診",
    reservationTime: { amFrom: "11:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
    consultingChoice: [
      {
        choiceId: 1,
        choiceName: "",
        acceptList: [
            {pdId: 1, pdName: "1時間前まで"},
            {pdId: 2, pdName: "いつでも可能"},
            {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
            {pdId: 4, pdName: "自由に入力してください"},
          ],
        changeList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
        cancelList: [
          {pdId: 1, pdName: "1時間前まで"},
          {pdId: 2, pdName: "いつでも可能"},
          {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
          {pdId: 4, pdName: "自由に入力してください"},
          ],
      },
    ],
  },
];
//   {
//     id: 4,
//     name: "インフルエンザ",
//     reservationTime: { amFrom: "09:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
//     consultingChoice: [
//       {
//         choiceName: "",
//         acceptList: [
//           [
//             {pdId: 1, pdName: "1時間前まで"},
//             {pdId: 2, pdName: "いつでも可能"},
//             {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//             {pdId: 4, pdName: "自由に入力してください"},
//           ],
//           [
//             {pdFrom: "", pdTo: ""},
//           ],
//         ],
//         changeList: [
//         [
//           {pdId: 1, pdName: "1時間前まで"},
//           {pdId: 2, pdName: "いつでも可能"},
//           {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//           {pdId: 4, pdName: "自由に入力してください"},
//         ],
//         [
//           {pdFrom: "", pdTo: ""},
//         ],
//         ],
//         cancelList: [
//         [
//           {pdId: 1, pdName: "1時間前まで"},
//           {pdId: 2, pdName: "いつでも可能"},
//           {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//           {pdId: 4, pdName: "自由に入力してください"},
//         ],
//         [
//           {pdFrom: "", pdTo: ""},
//         ],
//         ],
//       }
//     ],
//   },
//   {
//     id: 5,
//     name: "コロナワクチン",
//     reservationTime: { amFrom: "09:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
//     consultingChoice: [
//       {
//         choiceName: "",
//         acceptList: [
//           [
//             {pdId: 1, pdName: "1時間前まで"},
//             {pdId: 2, pdName: "いつでも可能"},
//             {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//             {pdId: 4, pdName: "自由に入力してください"},
//           ],
//           [
//             {pdFrom: "", pdTo: ""},
//           ],
//         ],
//         changeList: [
//         [
//           {pdId: 1, pdName: "1時間前まで"},
//           {pdId: 2, pdName: "いつでも可能"},
//           {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//           {pdId: 4, pdName: "自由に入力してください"},
//         ],
//         [
//           {pdFrom: "", pdTo: ""},
//         ],
//         ],
//         cancelList: [
//         [
//           {pdId: 1, pdName: "1時間前まで"},
//           {pdId: 2, pdName: "いつでも可能"},
//           {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//           {pdId: 4, pdName: "自由に入力してください"},
//         ],
//         [
//           {pdFrom: "", pdTo: ""},
//         ],
//         ],
//       }
//     ],
//   },
//   {
//     id: 6,
//     name: "オンライン診療",
//     reservationTime: { amFrom: "09:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
//     consultingChoice: [
//       {
//         choiceName: "",
//         acceptList: [
//           [
//             {pdId: 1, pdName: "1時間前まで"},
//             {pdId: 2, pdName: "いつでも可能"},
//             {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//             {pdId: 4, pdName: "自由に入力してください"},
//           ],
//           [
//             {pdFrom: "", pdTo: ""},
//           ],
//         ],
//         changeList: [
//         [
//           {pdId: 1, pdName: "1時間前まで"},
//           {pdId: 2, pdName: "いつでも可能"},
//           {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//           {pdId: 4, pdName: "自由に入力してください"},
//         ],
//         [
//           {pdFrom: "", pdTo: ""},
//         ],
//         ],
//         cancelList: [
//         [
//           {pdId: 1, pdName: "1時間前まで"},
//           {pdId: 2, pdName: "いつでも可能"},
//           {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//           {pdId: 4, pdName: "自由に入力してください"},
//         ],
//         [
//           {pdFrom: "", pdTo: ""},
//         ],
//         ],
//       }
//     ],
//   },
//   {
//     id: 7,
//     name: "PCR検査",
//     reservationTime: { amFrom: "09:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
//     consultingChoice: [
//       {
//         choiceName: "",
//         acceptList: [
//           [
//             {pdId: 1, pdName: "1時間前まで"},
//             {pdId: 2, pdName: "いつでも可能"},
//             {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//             {pdId: 4, pdName: "自由に入力してください"},
//           ],
//           [
//             {pdFrom: "", pdTo: ""},
//           ],
//         ],
//         changeList: [
//         [
//           {pdId: 1, pdName: "1時間前まで"},
//           {pdId: 2, pdName: "いつでも可能"},
//           {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//           {pdId: 4, pdName: "自由に入力してください"},
//         ],
//         [
//           {pdFrom: "", pdTo: ""},
//         ],
//         ],
//         cancelList: [
//         [
//           {pdId: 1, pdName: "1時間前まで"},
//           {pdId: 2, pdName: "いつでも可能"},
//           {pdId: 3, pdName: "翌日午前は前日23:59/午後は午前11:59まで"},
//           {pdId: 4, pdName: "自由に入力してください"},
//         ],
//         [
//           {pdFrom: "", pdTo: ""},
//         ],
//         ],
//       }
//     ],
//   },
// ];
