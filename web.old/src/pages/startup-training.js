import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import StartUpTrainingView from 'views/startup-training.view';

const StartUpTraining = () => {
  return <WithLayout component={StartUpTrainingView} layout={Main} />;
};

export default StartUpTraining;
