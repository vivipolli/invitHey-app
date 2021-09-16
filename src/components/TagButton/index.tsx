import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Btn,
  TextBtn
} from './styles';

interface Props extends TouchableOpacityProps {
  textBtn: string;
}

export function TagButton({ textBtn, ...rest }: Props) {
  return (
    <Btn {...rest}>
      <TextBtn>{textBtn}</TextBtn>
    </Btn>
  );
}