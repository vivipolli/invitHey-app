
import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode,
  isDefault: boolean,
}

export default function PrimaryBtn({ children, isDefault, ...props }: ButtonProps) {
  return (
    <Button isDefault={isDefault} {...props}>
      <Text isDefault={isDefault}>
        {children}
      </Text>
    </Button>
  )
}