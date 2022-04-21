/* eslint-disable import/prefer-default-export, react/prop-types */
const React = require('react');
const Layout = require('./src/layout').default;

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
