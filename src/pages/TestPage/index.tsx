import React from 'react';

import GlobalApp from '../../components/GlobalApp';
import ResearchInput from '../../components/ResearchInput';

import { PeopleCard } from '../../components/PeopleCard';

export default function TestPage() {

  return (
    <GlobalApp>
      <PeopleCard 
        nickName='eubryann_'
        normalName='Bryan Steiyer'
      />
    </GlobalApp>
      <ButtonSwitch isEnabled={true} toggleSwitch ={() => {}}/>
      <ButtonSwitch isEnabled={true} toggleSwitch ={() => {}}/>
      <ResearchInput />
    </GlobalApp >
  )
}