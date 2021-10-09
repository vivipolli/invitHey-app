import React from 'react';

import {
    Container,
    CategoryType,
    Icon
} from './styles';

type Props = {
    title: string;
    style?: {};
    onPress: () => void;
}

export function EventCategory(  { title, style }: Props  ) {
    return(
        <Container onPress={() => {}} style={style}>
            <CategoryType>{title}</CategoryType>
            <Icon name='keyboard-arrow-down' />
        </Container>
    );
}