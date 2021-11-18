import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const TempPage = () => {
  return <p>Hi, Impact</p>;
};

const AboutPage = () => {
  return <WithLayout component={TempPage} layout={Main} />;
};

export default AboutPage;
