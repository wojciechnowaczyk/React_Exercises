import { Routes, Route } from "react-router-dom";
import "./App.css";
import CompoundComponents1 from "./Exercises/CompoundComponents1";
import CompoundComponents2 from "./Exercises/CompoundComponents2";
import CompoundComponents3 from "./Exercises/CompoundComponents3";
import RenderProps1 from "./Exercises/RenderProps1";
import RenderProps2 from "./Exercises/RenderProps2";
import RenderProps3 from "./Exercises/RenderProps3";
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
        <Route
          path="/compound-components/exercise-3"
          element={<CompoundComponents3 />}
        />
        <Route path="/render-props/exercise-1" element={<RenderProps1 />} />
        <Route path="/render-props/exercise-2" element={<RenderProps2 />} />
        <Route path="/render-props/exercise-3" element={<RenderProps3 />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
