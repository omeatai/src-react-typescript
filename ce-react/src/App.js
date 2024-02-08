import "./App.css";
import GreetClass from "./components/GreetClass";

function App() {
  return (
    <div className="App">
      <GreetClass name="Bruce" />
      <GreetClass name="Alex" />
      <GreetClass name="John" />
    </div>
  );
}

export default App;
