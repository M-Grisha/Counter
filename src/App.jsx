import React from 'react';

import './App.css'

function App() {
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App" >
      <div className='App_container'>
        <h2 className='title'>Counter:</h2>
        <h1 className='number'>{count}</h1>
        <div className="button-box">
          <div onClick={onClickMinus} className="button">Minus -</div>
          <div onClick={onClickPlus} className="button">Plus +</div>
        </div>
      </div>
    </div>
  );
};

export default App;
