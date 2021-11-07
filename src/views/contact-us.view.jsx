import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Contact,
  Form,
  Hero,
  Newsletter,
} from '../templates-tf/ContactPage/components';

import { mapData } from '../templates-tf/ContactPage/data';

const ContactUsView = () => {
  return (
    <div>
      <Hero />
      <Contact data={mapData} />
      <SectionAlternate>
        <Form />
      </SectionAlternate>
      <Section>
        <Newsletter />
      </Section>
      <Divider />
    </div>
  );
};

export default ContactUsView;
