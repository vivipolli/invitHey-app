import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button } from './styles';

interface SocialButtonProps extends TouchableOpacityProps {
  isDefault: boolean,
  hasIcon?: boolean,
  icon?: ReactNode,
}

export default function SocialButton({ isDefault, hasIcon, icon, ...props }: SocialButtonProps) {
  return (
    <Button isDefault={isDefault} {...props}>
      {icon}
    </Button>
  )
}
