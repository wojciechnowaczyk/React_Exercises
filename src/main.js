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
        <Link to="/compound-components/exercise-3">
          Compound Components Exercise 3 (with Hooks)
        </Link>
        <Link to="/compound-components/exercise-4">
          Compound Components Exercise 4 (own example)
        </Link>
        <h2>Render Props:</h2>
        <Link to="/render-props/exercise-1">
          Render Props Exercise 1(Frontend Masters)
        </Link>
        <Link to="/render-props/exercise-2">
          Render Props Exercise 2(Frontend Masters)
        </Link>
        <Link to="/render-props/exercise-3">
          Render Props Exercise 3(Frontend Masters)
        </Link>
        <Link to="/render-props/exercise-4">
          Render Props Exercise 4 (own example)
        </Link>
        <h2>Lazy Loading:</h2>
        <Link to="/lazy-loading/exercise-1">Lazy Loading exercise 1</Link>
        <Link to="/lazy-loading/exercise-2">Lazy Loading exercise 2</Link>
        <h2>Cookies:</h2>
        <Link to="/cookies/">Cookies</Link>
        <h2>Pure Component:</h2>
        <Link to="/pure-component/">Pure Component</Link>
        <h2>Controlled and uncontrolled components:</h2>
        <Link to="/controlled-uncontrolled-components/">
          Controlled and uncontrolled components
        </Link>
        <h2>Render Callback:</h2>
        <Link to="/use-callback/">useCallback</Link>
        <Link to="/render-callback/">Render Callback</Link>
      </div>
    </>
  );
}

export default Main;
