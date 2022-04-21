import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import ContactUsView from 'views/ContactUs';

const ContactUs = () => {
  return <WithLayout component={ContactUsView} layout={Main} />;
};

export default ContactUs;
