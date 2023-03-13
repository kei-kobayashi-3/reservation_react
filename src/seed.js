export const consultationKinds = [
  {
    id: 1,
    name: "診察",
    reservationTime: { amFrom: "11:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
    consultingChoice: [
      {
        choiceId: 1,
        choiceName: "-",
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
        choiceName: "1歳時半検診",
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
        choiceName: "5歳時検診",
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
        choiceName: "乳幼児検診",
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
        choiceName: "入園/入学前検診",
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
        choiceName: "その他自費の検診",
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
    id: 4,
    name: "インフルエンザ",
    reservationTime: { amFrom: "09:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
    consultingChoice: [
      {
        choiceName: "-",
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
      }
    ],
  },
  {
    id: 5,
    name: "コロナワクチン",
    reservationTime: { amFrom: "09:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
    consultingChoice: [
      {
        choiceName: "-",
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
        }
    ],
  },
  {
    id: 6,
    name: "オンライン診療",
    reservationTime: { amFrom: "09:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
    consultingChoice: [
      {
        choiceName: "-",
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
      }
    ],
  },
  {
    id: 7,
    name: "PCR検査",
    reservationTime: { amFrom: "09:00", amTo: "13:00", pmFrom: "14:00", pmTo: "17:00" },
    consultingChoice: [
      {
        choiceName: "-",
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
      }
    ],
  },
];
