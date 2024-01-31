import CounterContext from "../Context/CounterContext";
import "./App.css";
import { useContext } from "react";
function App() {
  const {counter, setCounter} = useContext(CounterContext)
  const handleAdd = ()=>{
    setCounter(counter + 5)
  }
  const handleReduce = ()=>{
    setCounter(counter - 5)
  }
  return (
    <div className="App">
      <h1>Counter:{counter} </h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
      </div>
  );
}

export default App;
