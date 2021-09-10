import React from 'react';

import { 
    Btn,
    TextBtn 
} from './styles'; 

interface Props {
    textBtn: string;
}

export function Button( { textBtn }: Props ) {
    return (
        <Btn>
            <TextBtn>{textBtn}</TextBtn>
        </Btn>
    );
}