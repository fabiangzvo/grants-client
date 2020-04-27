import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Content } from 'layouts';
import { Header, SEO, Accordion } from 'components';
import '../styles/prism';
import { shortenText } from "../utils/index";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { SuggestionBar, PostSuggestion, Wrapper } from "../styles/components";


const Post = ({ pageContext }) => {
  const { next, prev, grant } = pageContext;
  let [eligibility, setEligibility] = useState(false);
  let [aditionalInformation, setAditionalInformation] = useState(false);
  console.log(prev)
  console.log(next)
  return (
    <>
      <SEO
        title={grant.title}
        description={grant.agencyDescription || ' '}
        banner={grant.image}
        pathname={`/grant/${grant.id}`}
        article
      />
      <Header title={grant.title} date={grant.postedDate} />
      <Container>
        <Wrapper justify='center'><img src={grant.image} alt={grant.category} /></Wrapper>
        <Wrapper><span>Funding Opportunity Number:</span><Content input={grant.opportunityNumber} /></Wrapper>
        <Wrapper><span>Category:</span><Content input={grant.category} /></Wrapper>
        <Wrapper><span>CFDA Number(s):</span><Content input={grant.cfda} /></Wrapper>
        <Wrapper><span>Cost Sharing or Matching Requirement:</span><Content input={grant.matchingRequired} /></Wrapper>
        <Wrapper><span>Estimated Application Due Date:</span><Content input={grant.dateDue} /></Wrapper>
        <Wrapper><span>Estimated Total Program Funding:</span><Content input={grant.totalFunding} /></Wrapper>
        <Wrapper><span>Award Ceiling:</span><Content input={grant.awardCeiling} /></Wrapper>
        <Wrapper><span>Award Floor:</span><Content input={grant.awardFloor} /></Wrapper>
        <Accordion heading="Eligibility" isOpen={eligibility}
          onToggle={() => setEligibility(s => !s)} >
          <Wrapper><span>Eligible Applicants:</span><Content input={grant.eligibilityapplicants} /></Wrapper>
          <Wrapper><span>Additional Information on Eligibility:</span><Content input={grant.informationEligibility} /></Wrapper>
        </Accordion>
        <Accordion heading="Additional Information" isOpen={aditionalInformation}
          onToggle={() => setAditionalInformation(s => !s)} >
          <Wrapper><span>Agency Name:</span><Content input={grant.agencyName} /></Wrapper>
          <Wrapper><span>Description :</span><Content input={grant.agencyDescription} /></Wrapper>
          <Wrapper><span>Grantor Contact Information:</span><Content input={grant.agencyContact} /></Wrapper>
        </Accordion>
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={`/grant/${prev.id}`}>
              <IoMdArrowRoundBack size='2em' />
              <h4>{shortenText(prev.title, 20)}</h4>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={`/grant/${next.id}`}>
              <h4>{shortenText(next.title, 20)}</h4>
              <IoMdArrowRoundForward size='2em' />
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
    grant: PropTypes.Object,
  }).isRequired,
};
