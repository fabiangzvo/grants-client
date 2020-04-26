import React from 'react';
import { Link } from 'gatsby';
import { Nav } from '../styles/components';
import Headroom from 'react-headroom';

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <Nav>
      <Link to="/">
        𝔊𝔯𝔞𝔫𝔱𝔰
      </Link>
    </Nav>
  </Headroom>
);

export default NavBar;
