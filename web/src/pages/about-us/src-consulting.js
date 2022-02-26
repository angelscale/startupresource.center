import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import SRCConsultingView from 'views/src-consulting.view';

const SRCConsulting = () => {
  return <WithLayout component={SRCConsultingView} layout={Main} />;
};

export default SRCConsulting;
