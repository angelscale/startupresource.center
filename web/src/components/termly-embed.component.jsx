import React from 'react';

const termlyData = (d, s, id) => {
  const tjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  const js = d.createElement(s);
  js.id = id;
  js.src = 'https://app.termly.io/embed-policy.min.js';
  tjs.parentNode.insertBefore(js, tjs);
};

const TermlyEmbed = ({ dataId }) => {
  if (typeof document !== 'undefined') {
    termlyData(document, 'script', 'termly-jssdk');
    return <div name="termly-embed" data-id={dataId} data-type="iframe" />;
  } else return null;
};

export default TermlyEmbed;
