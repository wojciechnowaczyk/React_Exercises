import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <h1>React Exercises</h1>
      <h2>Compound Components:</h2>
      <div style={{ display: "flex", "flex-direction": "column" }}>
        <Link to="/compound-components/exercise-1">
          Compound Components Exercise 1 (Frontend Masters)
        </Link>
        <Link to="/compound-components/exercise-2">
          Compound Components Exercise 2 (Frontend Masters)
        </Link>
        <Link to="/compound-components/exercise-2">
          Compound Components Exercise 3 (with Hooks)
        </Link>
      </div>
    </>
  );
}

export default Main;
