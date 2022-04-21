import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import AboutUsView from 'views/AboutUs';

const AboutUs = () => {
  return <WithLayout component={AboutUsView} layout={Main} />;
};

export default AboutUs;
