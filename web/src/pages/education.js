import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import EducationView from 'views/education.view';

const EducationPage = () => {
  return <WithLayout component={EducationView} layout={Main} />;
};

export default EducationPage;
