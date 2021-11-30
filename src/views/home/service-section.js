import React from 'react';

import { Main } from 'templates/PortfolioGrid/components';
import { services } from 'templates/PortfolioGrid/data';

const ServiceSectionView = () => {
  return (
    <>
      <Main data={services} />
    </>
  );
};

export default ServiceSectionView;
