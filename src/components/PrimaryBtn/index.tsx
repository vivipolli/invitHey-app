
import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode,
  isDefault: boolean,
  hasIcon?: boolean,
  icon?: ReactNode,
}

export default function PrimaryBtn({ children, isDefault, hasIcon, icon, ...props }: ButtonProps) {
  return (
    <Button isDefault={isDefault} {...props}>
      {icon}
      <Text isDefault={isDefault}>
        {children}
      </Text>
    </Button>
  )
}