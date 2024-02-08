import "./App.css";
import GreetClass from "./components/GreetClass";

function App() {
  return (
    <div className="App">
      <GreetClass name="Bruce">
        <h2>This is the Child Prop of Bruce.</h2>
      </GreetClass>
      <GreetClass name="Alex">
        <h2>This is the Child Prop of Alex.</h2>
      </GreetClass>
      <GreetClass name="John" />
    </div>
  );
}

export default App;
