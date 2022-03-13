import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import SRCConsultingView from 'views/SrcConsulting';

const SRCConsulting = () => {
  return <WithLayout component={SRCConsultingView} layout={Main} />;
};

export default SRCConsulting;
