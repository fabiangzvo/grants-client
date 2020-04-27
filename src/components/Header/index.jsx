import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text, Subtitle } from "./style";

const Header = ({ children, title, date, image }) => (
  <Wrapper>
    {image && <img src={image || ''} alt={title} />}
    <Text>
      <h1>{title}</h1>
      <h3>{date}</h3>
      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
