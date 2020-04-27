import React from 'react';
import PropTypes from 'prop-types';
import { shortenText } from "../../utils/index";
import { Wrapper, Image, StyledLink, Info, Title } from "./style";

const PostList = ({ image, path, date, title, excerpt }) => (
  <Wrapper>
    <Image>
      <img src={image} alt={title} />
    </Image>
    <StyledLink to={path}>
      <Info>
        <span>{date}</span>
        <Title>{shortenText(title, 35)}</Title>
        <span>{excerpt}</span>
      </Info>
    </StyledLink>
  </Wrapper>
);

export default PostList;

PostList.propTypes = {
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
