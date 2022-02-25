import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import LaunchView from 'views/launch.view';

const Launch = () => {
  return <WithLayout component={LaunchView} layout={Main} />;
};

export default Launch;
