import React from 'react';
import GlobalComponent from '../../components/GlobalApp';
import { PeopleCard } from '../../components/PeopleCard';
import ResearchInput from '../../components/ResearchInput';

export function Invite() {
    return (
        <GlobalComponent>
            <ResearchInput />
            <PeopleCard 
                buttonTitle='Enviar Convite'
                nickName='juneejohnny'
                normalName='June Carter'
            />
        </GlobalComponent>
    );
}