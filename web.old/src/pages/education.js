import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import EducationView from 'views/Education';

const EducationPage = () => {
  return <WithLayout component={EducationView} layout={Main} />;
};

export default EducationPage;
