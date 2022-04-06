import React from "react";

const RenderCallback = () => {
  const foo = (hello) => {
    return hello("foo");
  };

  const Component = (props) => {
    return props.render();
  };

  const testFunction = () => {
    return "Hello World";
  };
  return (
    <>
      <p>Render callback</p>
      <p>
        From the React docs: "As you can see, foo used the callback function to
        complete a portion of a string. In the React world, a render callback
        works the same way, but returning a portion of the rendered markup."
      </p>
      {foo((name) => {
        return `hello from ${name}`;
      })}
      <Component render={testFunction} />
    </>
  );
};

export default RenderCallback;
