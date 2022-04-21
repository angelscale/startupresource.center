import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import GrowView from 'views/grow.view';

const Grow = () => {
  return <WithLayout component={GrowView} layout={Main} />;
};

export default Grow;
