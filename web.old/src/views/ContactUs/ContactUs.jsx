import React from 'react';
import { Divider } from '@mui/material';

import { ToastContainer } from 'react-toastify';

import { Section } from 'components/organisms';
import { ContactWithForm, Hero, Newsletter } from './components';

import { mapData } from './data';

const ContactUs = () => {
  return (
    <div>
      <Hero />
      <ContactWithForm data={mapData} />
      <Section>
        <Newsletter />
      </Section>
      <Divider />
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
