import React from 'react';

import {
    Container,
    Page,
    ArrowIcon,
    Back
} from './styles';

interface Props {
    page: string;
}

export function Header({ page }: Props) {
    return (
        <Container>
            <Back>
                <ArrowIcon name='arrow-left' />
            </Back>
            <Page>{page}</Page>
        </Container>
    );
}