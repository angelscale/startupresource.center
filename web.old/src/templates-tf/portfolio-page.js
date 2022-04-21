/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import PortfolioPage from './PortfolioPage';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const PortfolioViewPage = () => {
  return <WithLayout component={PortfolioPage} layout={Main} />;
};

export default PortfolioViewPage;
