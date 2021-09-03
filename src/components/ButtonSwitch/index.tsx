import React from 'react';
import { Switch }  from 'react-native';

interface ButtonSwitchProps  {
  isEnabled: boolean,
  toggleSwitch: () => void,
}

export default function ButtonSwitch({ isEnabled, toggleSwitch }: ButtonSwitchProps) {

  return(
    <Switch
      style={{ transform: [{ scaleX: .9 }, { scaleY: .9  }] }}
      trackColor={{ false: "#B5BACC", true: "#4CB4FF" }}
      thumbColor={isEnabled ? "#fff" : "#fff"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
