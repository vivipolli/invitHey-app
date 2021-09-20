import React from 'react';
import { StatusBar } from 'react-native';

import Bell from '../../../assets/icons/Bell.svg';
import Logo from '../../../assets/images/logoType_small.svg';

import {
    Container
} from './styles';

export function HeaderHome() {
    return (
        <Container>
            <StatusBar backgroundColor={'#FF7527'} />
            <Logo />
            <Bell />
        </Container>
    );
}