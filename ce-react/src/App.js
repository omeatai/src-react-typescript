import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPerson from "./components/ErrorPerson";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ErrorPerson name="John" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorPerson name="James" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorPerson name="error" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
