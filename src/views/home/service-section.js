import React from 'react';

import { Main } from 'templates/PortfolioGrid/components';
import { services } from 'templates/PortfolioGrid/data';
import SectionLabel from 'components/SectionLabel';

const ServiceSectionView = () => {
  return (
    <>
      <SectionLabel
        align="center"
        title="Our Services"
        subtitle="Do pariatur velit eu incididunt pariatur non ullamco exercitation eu mollit veniam sint eiusmod."
      />
      <Main data={services} />
    </>
  );
};

export default ServiceSectionView;
