// Compound Components

import React from "react";
import { Switch } from "../switch";

class Toggle extends React.Component {
  //The static keyword defines a static method or property for a class, or a class static initialization block (see the link for more information about this usage).
  // Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.
  //Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration,
  //or any other data you don't need to be replicated across instances.
  static On = (props) => (props.on ? props.children : null);
  static Off = (props) => (props.on ? null : props.children);
  static Button = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;
  state = { on: false };
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    );
  render() {
    return React.Children.map(this.props.children, (childElement) => {
      return React.cloneElement(childElement, {
        on: this.state.on,
        toggle: this.toggle,
      });
    });
  }
}

function Usage({ onToggle = (...args) => console.log("onToggle", ...args) }) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
}
Usage.title = "Compound Components";

export { Toggle, Usage as default };
