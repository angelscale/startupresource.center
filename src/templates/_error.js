import React from 'react';
import ServerError from './ServerError';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ErrorPage = (props) => {
  return <WithLayout component={ServerError} layout={Main} {...props} />;
};

export default ErrorPage;
