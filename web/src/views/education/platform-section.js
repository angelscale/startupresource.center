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
        subtitle="When creating a business, there’s a lot to know. SRC has curated a list of educational resources to provide you with everything you need to know to get your business off to a successful start. Check out the links below to learn more and really hit the ground running. "
      />
      <Main data={platforms} />
    </>
  );
};

export default PlatformSectionView;
