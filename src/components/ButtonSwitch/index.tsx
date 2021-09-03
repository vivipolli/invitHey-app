import React, { useState } from 'react';
import { Switch }  from 'react-native';


export default function ButtonSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
