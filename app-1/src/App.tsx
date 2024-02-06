import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={() => {
          console.log("Button clicked");
        }}
      />
      <Button
        handleClick={(event, id) => {
          console.log("Button Event clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
