import "./App.css";
import { UserProvider } from "./contexts/userContext";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      <UserProvider value="Vishwas">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
