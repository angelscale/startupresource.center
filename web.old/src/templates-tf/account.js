/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import NoSsr from '@mui/material/NoSsr';
import Account from './Account';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const Component = () => {
  return (
    <NoSsr>
      <Account />
    </NoSsr>
  );
};

const AccountPage = () => {
  return <WithLayout component={Component} layout={Main} />;
};

export default AccountPage;
