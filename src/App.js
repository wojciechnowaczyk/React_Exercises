import { Routes, Route } from "react-router-dom";
import "./App.css";
import CompoundComponents1 from "./Exercises/CompoundComponents1";
import CompoundComponents2 from "./Exercises/CompoundComponents2";
import Main from "./main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/compound-components/exercise-1"
          element={<CompoundComponents1 />}
        />
        <Route
          path="/compound-components/exercise-2"
          element={<CompoundComponents2 />}
        />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
