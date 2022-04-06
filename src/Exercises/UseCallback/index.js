import React, { useCallback } from "react";
import Title from "./Title";
import RenderText from "./RenderText";
import Button from "./Button";

const UseCallback = () => {
  const [age, setAge] = React.useState(20);
  const [salary, setSalary] = React.useState(3000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 100);
  }, [salary]);
  return (
    <>
      <p>Render Callback</p>
      <p>
        useCallback is a hook that will return a memoized version of the
        callback function that only changes if one of the dependencies has
        changed
      </p>
      <p>
        It is useful when passing callbacks to optimized child components that
        rely on the reference equality to prevent unnecessary renders
      </p>
      <p>
        In the example below, useCallback affects in the number of rerendering
        of the Button component. Thanks to useCallback, when one button is
        clicked, just one is rerendered, not both of them as it was when there
        was no useCallback hook
      </p>
      <Title title="Age" />
      <RenderText text={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Title title="Salary" />
      <RenderText text={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  );
};

export default UseCallback;
