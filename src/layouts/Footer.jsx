import React from 'react';
import { Footer as FooterStyled } from '../styles/components';
import { FaTwitter } from "react-icons/fa";

const Footer = () => (
  <FooterStyled>
    <div>
      <span>
        Fabián Guzmán Otavo </span>
      <a href="https://twitter.com/fabiangzvo" target='__blank' ><FaTwitter color='rgba(29,161,242,1.00)' /></a>

    </div>
  </FooterStyled>
);
export default Footer;
