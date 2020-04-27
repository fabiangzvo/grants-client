import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Header, PostList, Pagination } from 'components';
import { PostWrapper, Wrapper } from "../styles/components";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";


const Index = () => {
  //flags to get array parts
  const [skip, setSkip] = useState(20)
  const [offset, setOffset] = useState(0)

  const { allGrants } = useStaticQuery(graphql`
  query getGrants {
    allGrants {
    totalCount
    edges{
      node {
        id
        agencyName
        postedDate
        image
        title
      }
    }
  }
}
`);
  /**
   * @function handleChange
   * Encharge of change the local states of variables
   * offset and skip 
   * 
   * @param {Number} tabNumber 
   */
  const handleChange = (tabNumber) => {
    setSkip(tabNumber * 20 - 1)
    setOffset((tabNumber - 1) * 20)
  }
  const { edges } = allGrants;
  //get part of array
  const grants = edges.slice(offset, skip)

  return (
    <>
      <Helmet title={'Home Page'} />
      <Header title="Convenience Comes to Federal Grants" >Find · Apply · Succeed</Header>
      <div><Pagination next={MdNavigateNext} prev={MdNavigateBefore} change={handleChange} /></div>
      <PostWrapper>
        {grants.map(({ node }) => {
          const grant = node
          const { id, title, postedDate, agencyName, image } = grant;
          return (
            <PostList
              key={id}
              image={image}
              path={`grant/${id}`}
              title={title}
              date={postedDate}
              excerpt={agencyName}
            />
          );
        })}
      </PostWrapper>
    </>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

