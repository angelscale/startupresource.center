import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import ManageView from 'views/manage.view';

const Manage = () => {
  return <WithLayout component={ManageView} layout={Main} />;
};

export default Manage;
