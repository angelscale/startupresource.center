import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import PlanView from 'views/plan.view';

const Plan = () => {
  return <WithLayout component={PlanView} layout={Main} />;
};

export default Plan;
