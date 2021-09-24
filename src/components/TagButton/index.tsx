import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Btn,
  TextBtn
} from './styles';

interface Props extends TouchableOpacityProps {
  textBtn: string;
  isActive?: boolean;
  handleButton?: () => void;
}

export function TagButton({ textBtn, isActive, handleButton, ...rest }: Props) {
  return (
    <Btn isActive={isActive} onPress={handleButton} >
      <TextBtn isActive={isActive}>{textBtn}</TextBtn>
    </Btn>
  );
}