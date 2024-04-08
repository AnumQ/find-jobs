import { useState } from "react";

export const useLiveSwitch = (initialState = false) => {
  const [isOn, toggle] = useState(initialState);

  const toggleSwitch = () => {
    toggle(!isOn);
  };
  return { isOn, toggleSwitch };
};
