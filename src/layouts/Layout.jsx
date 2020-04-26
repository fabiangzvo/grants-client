import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'typeface-open-sans';
import 'typeface-candal';
import { SEO } from 'components';
import { NavBar, Footer } from 'layouts';

const Layout = ({ children }) => (
  <Fragment>
    <SEO />
    <NavBar />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
