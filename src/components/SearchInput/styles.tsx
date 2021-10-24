import SearchSvg from '../../assets/icons/search.svg';

import styled from '../../../styled-components';
import { TextInput } from 'react-native';


export const Container = styled.View`
  margin-bottom: 10px;
  position: relative;
`

export const Icon = styled(SearchSvg)`
  position: absolute;
  top: 20px;
  left: 20px;
`

export const Input = styled(TextInput)`
  padding-left: 200px;
  height: 56px;
  width: 100%;
  border-radius: 40px; 
  border-color: ${props => props.theme.colors.textGray};
  padding-left: 45px;
  background-color: ${props => props.theme.colors.lightGray};
`

