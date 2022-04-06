import React from "react";

class PureComponentExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  onIncrement = () => {
    this.setState({ count: 0 });
  };
  render() {
    console.log("React Pure component render method");
    return (
      <>
        <p>React Pure Component</p>
        <br />
        {this.state.count}
        <button onClick={this.onIncrement}>Set same state as before</button>
      </>
    );
  }
}

class ComponentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  onIncrement = () => {
    this.setState({ count: 0 });
  };
  render() {
    console.log("React component render method");
    return (
      <>
        <p>React Component</p>
        <br />
        {this.state.count}
        <button onClick={this.onIncrement}>Set same state as before</button>
      </>
    );
  }
}

class PureComponentExercise extends React.PureComponent {
  render() {
    return (
      <div>
        <p>Pure Component</p>
        <p>
          In class component, when the component gets new props, state or
          context, the component is always rerendered. In the Pure Component,
          React compares actual params in component and if the values are the
          same, there is no rerendering.{" "}
        </p>
        <p>
          From React docs: "The difference between them is that React.Component
          doesn’t implement shouldComponentUpdate(), but React.PureComponent
          implements it with a shallow prop and state comparison."
        </p>
        <p>
          <b>Tips:</b>
        </p>
        <li style={{ "list-style": "none" }}>
          <ul>
            Try to avoid declaring functions in render while using
            PureComponent. It effects in avoding rerender.
          </ul>
          <ul>
            Try not to declare value function in render. Instead declare value
            in state.
          </ul>
        </li>
        <ComponentExample />
        <PureComponentExample />
      </div>
    );
  }
}

export default PureComponentExercise;
