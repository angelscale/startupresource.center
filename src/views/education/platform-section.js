import React from 'react';

import { Main } from 'templates/PlatformGrid/components';
import { platforms } from 'templates/PlatformGrid/data';
import SectionLabel from 'components/SectionLabel';

const PlatformSectionView = () => {
  return (
    <>
      <SectionLabel
        align="center"
        title="Learning Platform"
        subtitle="Commodo occaecat irure esse nostrud aliquip laborum enim commodo. Esse cupidatat dolore esse deserunt pariatur velit."
      />
      <Main data={platforms} />
    </>
  );
};

export default PlatformSectionView;
