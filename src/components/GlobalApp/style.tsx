import styled from '../../../styled-components';
import { Platform } from 'react-native';


export const Container = styled.SafeAreaView`
    padding-top: ${Platform.OS === 'android' ? 16 : 0}px;
    padding-left: 16px;
    padding-right: 16px;
    flex: 1;
    background-color: #FAFAFA;
`