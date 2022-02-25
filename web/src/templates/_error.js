import React from 'react';
import ServerError from 'views/server-error.view';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ErrorPage = (props) => {
  return <WithLayout component={ServerError} layout={Main} {...props} />;
};

export default ErrorPage;
