import React, { useCallback, useMemo } from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Container, Content } from './styles';

type BottomModalProps = {
  ref: any;
}

const BottomModal = ({ ref }: BottomModalProps) => {
  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <Container>
      <BottomSheet
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Content>
          <Text>Awesome 🎉</Text>
        </Content>
      </BottomSheet>
    </Container>
  );
};

export default BottomModal;