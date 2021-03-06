import React from 'react';
import PropTypes from 'prop-types';
import { Container as Wrapper } from "../styles/components";

const Container = ({ children, width, type, className, center }) => (
  <Wrapper width={width} className={className} type={type} center={center}>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object,
};
