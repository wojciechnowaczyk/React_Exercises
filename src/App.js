import { Routes, Route } from "react-router-dom";
import "./App.css";
import CompoundComponent1 from "./Exercises/CompoundComponent1";
import Main from "./main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/compound-components/exercise-1"
          element={<CompoundComponent1 />}
        />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
