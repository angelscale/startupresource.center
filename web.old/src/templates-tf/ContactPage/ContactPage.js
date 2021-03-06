import React from 'react';
import { Divider } from '@mui/material';
import { Section, SectionAlternate } from 'components/organisms';
import { Contact, Form, Hero, Newsletter } from './components';

import { mapData } from './data';

const ContactPage = () => (
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

export default ContactPage;
