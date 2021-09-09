import React from 'react';

import GlobalApp from '../../components/GlobalApp';

import { PeopleCard } from '../../components/PeopleCard';

export default function TestPage() {

  return (
    <GlobalApp>
      <PeopleCard 
        nickName='eubryann_'
        normalName='Bryan Steiyer'
      />
    </GlobalApp>
  )
}