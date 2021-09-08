import React from 'react';
import ButtonSwitch from '../../components/ButtonSwitch';

import GlobalApp from '../../components/GlobalApp';
import ResearchInput from '../../components/ResearchInput';

export default function TestPage() {

  return (
    <GlobalApp>
      <ButtonSwitch isEnabled={true} toggleSwitch ={() => {}}/>
      <ButtonSwitch isEnabled={true} toggleSwitch ={() => {}}/>
      <ResearchInput />

    </GlobalApp >
  )
}