import "./App.css";
import { Button } from "../../app-2/src/components/Button";
import { Input } from "../../app-2/src/components/Input";

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
