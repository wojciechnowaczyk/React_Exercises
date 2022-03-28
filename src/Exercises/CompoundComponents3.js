import * as React from "react";
import { Switch } from "../switch";

const ToggleContext = React.createContext();

function useEffectAfterMount(cb, dependencies) {
  const justMounted = React.useRef(true);
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
  }, dependencies);
}

function Toggle(props) {
  const [on, setOn] = React.useState(false);
  const toggle = React.useCallback(() => setOn((oldOn) => !oldOn), []);
  useEffectAfterMount(() => {
    props.onToggle(on);
  }, [on]);
  const value = React.useMemo(() => ({ on, toggle }), [on]);
  return (
    <ToggleContext.Provider value={value}>
      {props.children}
    </ToggleContext.Provider>
  );
}

function useToggleContext() {
  const context = React.useContext(ToggleContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
}

function On({ children }) {
  const { on } = useToggleContext();
  return on ? children : null;
}

function Off({ children }) {
  const { on } = useToggleContext();
  return on ? null : children;
}

function Button(props) {
  const { on, toggle } = useToggleContext();
  return <Switch on={on} onClick={toggle} {...props} />;
}

Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;

const Usage = ({
  onToggle = (...args) => console.log("onToggle", ...args),
}) => {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
};

export default Usage;
