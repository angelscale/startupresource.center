import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Section, SectionAlternate } from 'components/organisms';
import {
  Contact,
  ContactWithForm,
  Form,
  Hero,
  Newsletter,
} from '../templates-tf/ContactPage/components';

import { mapData } from '../templates-tf/ContactPage/data';

const ContactUsView = () => {
  return (
    <div>
      <Hero />
      {/* <Contact data={mapData} /> */}
      <ContactWithForm data={mapData} />
      {/* <SectionAlternate>
        <Form />
      </SectionAlternate> */}
      <Section>
        <Newsletter />
      </Section>
      <Divider />
      <ToastContainer />
    </div>
  );
};

export default ContactUsView;
