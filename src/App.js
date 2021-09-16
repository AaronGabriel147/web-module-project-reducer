import React, { useReducer } from 'react';
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer from './reducers/index';
import { initialState } from './reducers/index';
import { addOne, applyNumber, changeOperation, clearDisplay, memoryStore, memoryRecall, memoryReset } from './actions/index'


                              
function App() {         

  const [calcState, dispatch] = useReducer(reducer, initialState)


  const handleNumber = (input) => {
    dispatch(applyNumber(input))
  }

  const handleOperation = (input) => {
    dispatch(changeOperation(input))
  }

  const handleClear = () => {
    dispatch(clearDisplay())
  }

  const handleMemoryStore = () => {
    dispatch(memoryStore())
  }

  const handleMemoryRecall = () => {
    dispatch(memoryRecall())
  }

  const handleMemoryReset = () => {
    dispatch(memoryReset())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={calcState.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{calcState.operation}</span>
              <span id="memory"><b>Memory:</b>{calcState.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleMemoryStore()} />
              <CalcButton value={"MR"} onClick={() => handleMemoryRecall()}/>
              <CalcButton value={"MC"} onClick={() => handleMemoryReset()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumber(1)} />
              <CalcButton value={2} onClick={() => handleNumber(2)}/>
              <CalcButton value={3} onClick={() => handleNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumber(4)}/>
              <CalcButton value={5} onClick={() => handleNumber(5)}/>
              <CalcButton value={6}onClick={() => handleNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7}onClick={() => handleNumber(7)}/>
              <CalcButton value={8}onClick={() => handleNumber(8)}/>
              <CalcButton value={9}onClick={() => handleNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={ () => handleOperation("+")}/>
              <CalcButton value={"*"} onClick={ () => handleOperation("*")}/>
              <CalcButton value={"-"} onClick={ () => handleOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={ () => handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
