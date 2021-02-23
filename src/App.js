import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function DisplayHello() {
  return (
    <div className="App">
      <h1>Hello murugeswarivellilingam</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <DisplayHello />
      <Tick />
    </div>
  );
}
function Tick() {
  const [name, setName] = React.useState("");

  function onChangeText(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <div>
          <input type="text" onChange={onChangeText} />
          <p>Please type your name {name}</p>
        </div>
      </form>
    </div>
  );
}
export default App;
