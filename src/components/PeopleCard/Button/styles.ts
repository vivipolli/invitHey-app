import styled from '../../../../styled-components';

import { TouchableOpacity } from 'react-native';

export const Btn = styled(TouchableOpacity)`
    width: 80px;
    padding: 6px 12px;
    /* background-color: ${({theme}) => theme.colors.lightGray}; */
    background-color: #f5f5f5;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

export const TextBtn = styled.Text`
    font-size: ${({theme}) => theme.typography.smallestFont};
    font-family: ${({theme}) => theme.typography.medium};
`;