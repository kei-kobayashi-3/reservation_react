import React,{ useState, useEffect } from 'react';

function Accept(props){

  const [showInput, setShowInput] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // selectedOptionに応じて、inputの表示/非表示を更新する
    if (selectedOption === "自由に入力してください") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  }, [selectedOption]);


  return(
    <>
      <label>
        <select onChange={(e) => setSelectedOption(e.target.value)}>
          {props.choice.map((op) =>
          <option key={op.pdId} value={op.pdName}>{op.pdName}</option>)}
        </select>
      </label>
      <div>
        {showInput && <input type="text"></input>}
      </div>
    </>
  );
}

export default Accept;
