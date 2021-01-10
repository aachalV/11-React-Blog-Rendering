import "./App.css";
import Home from "../src/pages/home/Home";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
