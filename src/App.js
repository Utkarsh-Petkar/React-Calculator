import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const clickHandler = (event) => {
    setResult(result.concat(event.target.value))
  }
  const clearDisplay=()=>{
    setResult("");
  }
  const calculate=()=>{
    setResult(eval(result).toString());
  }
  return (
    <div className="Calc">
      <input type="text" placeholder="0" id="result" value={result} />
      <input type="button" value="7" className="button" onClick={clickHandler} />
      <input type="button" value="8" className="button" onClick={clickHandler} />
      <input type="button" value="9" className="button" onClick={clickHandler} />
      <input type="button" value="C" id="btnC" className="button" onClick={clearDisplay}/>
      <input type="button" value="4" className="button" onClick={clickHandler} />
      <input type="button" value="5" className="button" onClick={clickHandler} />
      <input type="button" value="6" className="button" onClick={clickHandler} />
      <input type="button" value="+" id="add" className="button arith" onClick={clickHandler} />
      <input type="button" value="1" className="button" onClick={clickHandler} />
      <input type="button" value="2" className="button" onClick={clickHandler} />
      <input type="button" value="3" className="button" onClick={clickHandler} />
      <input type="button" value="-" id="sub" className="button arith" onClick={clickHandler} />
      <input type="button" value="." id="dot" className="button arith" onClick={clickHandler} />
      <input type="button" value="0" className="button" onClick={clickHandler} />
      <input type="button" value="*" id="mult" className="button arith" onClick={clickHandler} />
      <input type="button" value="/" id="div" className="button arith" onClick={clickHandler} />
      <input type="button" value="=" id="btnEqual" className="button" onClick={calculate}/>
      <input type="button" value="%" id="mod" className="button arith" onClick={clickHandler} />
    </div>
  );
}

export default App;
