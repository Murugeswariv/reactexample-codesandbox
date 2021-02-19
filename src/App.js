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
  return <div>{new Date().toLocaleTimeString()}</div>;
}
export default App;
