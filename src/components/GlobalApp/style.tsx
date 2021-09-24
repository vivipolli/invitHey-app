import styled from '../../../styled-components';
import { Platform } from 'react-native';

type Props = {
  primaryBg: boolean,
}


export const Container = styled.SafeAreaView<Props>`
    padding-top: ${Platform.OS === 'android' ? 16 : 0}px;
    padding-left: 16px;
    padding-right: 16px;
    flex: 1;
    background-color: ${(props) => props.primaryBg ? '#70AD47' : 'transparent'};
`