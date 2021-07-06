
import React from 'react';
import { Container, Text, PrimaryText } from './styles';

interface TextButtonProps {
  onPress: () => void,
  textToPress: string,
  textToInfo: string,
}

export default function TextButton({ textToPress, textToInfo, onPress }: TextButtonProps) {
  return (
    <Container onPress={onPress}>
      <Text>
        {textToInfo}
      </Text>
      <PrimaryText>
        {textToPress}
      </PrimaryText>
    </Container>
  )
}