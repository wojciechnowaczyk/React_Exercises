import React from "react";

const ControlledComponent = () => {
  const [inputValue, setInputValue] = React.useState();
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  React.useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return <input onChange={handleChange} />;
};

const UncontrolledComponent = () => {
  const ref = React.useRef(null);
  const onClick = () => {
    console.log("Input value: ", ref.current?.value);
  };
  return (
    <>
      <input ref={ref} />
      <button onClick={onClick}>Log the input ref value</button>
    </>
  );
};

const ControlledAndUncontrolledComponents = () => {
  return (
    <>
      <h4>Controlled and uncontrolled components</h4>
      <p>
        Controlled components are the ones that their internal state is
        controlled by React.{" "}
      </p>
      <p>
        From the React docs: "In a controlled component, form data is handled by
        a React component. The alternative is uncontrolled components, where
        form data is handled by the DOM itself."
      </p>
      <p>
        "With a controlled component, the input’s value is always driven by the
        React state. While this means you have to type a bit more code, you can
        now pass the value to other UI elements too, or reset it from other
        event handlers."
      </p>
      <p>It is recommended to use Controlled Components</p>
      <h4>Controlled Component:</h4>
      <ControlledComponent />
      <h4>Uncontrolled Component:</h4>
      <UncontrolledComponent />
    </>
  );
};

export default ControlledAndUncontrolledComponents;
