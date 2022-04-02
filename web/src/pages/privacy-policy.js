import React from 'react';

const termlyData = (d, s, id) => {
  var js,
    tjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://app.termly.io/embed-policy.min.js';
  tjs.parentNode.insertBefore(js, tjs);
};

const PrivacyPolicy = () => {
  termlyData(document, 'script', 'termly-jssdk');
  return (
    <div
      name="termly-embed"
      data-id="7b91ebc0-d1c0-4340-843a-f71ad086b064"
      data-type="iframe"
    />
  );
};

export default PrivacyPolicy;
