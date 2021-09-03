import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, Text } from './styles'

interface LinkButtonProps extends TouchableOpacityProps {
  isDefault: boolean,
  children: ReactNode,
}

export default function LinkButton({ children, isDefault, ...props }: LinkButtonProps) {
  return(
    <Button isDefault={isDefault} {...props}>
      <Text isDefault={isDefault}>
        {children}
      </Text>
    </Button>
  )
}