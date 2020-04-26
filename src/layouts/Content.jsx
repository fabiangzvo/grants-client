import React from 'react';
import PropTypes from 'prop-types';

import { Content as Wrapper } from "../styles/components";

const Content = ({ input }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};
