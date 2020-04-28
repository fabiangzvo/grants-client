import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Content } from 'layouts';
import { Header, SEO, Accordion } from 'components';
import { Form } from "../components/index";
import '../styles/prism';
import { shortenText } from "../utils/index";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { SuggestionBar, PostSuggestion, Wrapper, Button } from "../styles/components";


const Post = ({ pageContext }) => {
  const { next, prev, grant } = pageContext;
  const [eligibility, setEligibility] = useState(false);
  const [aditionalInformation, setAditionalInformation] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const updateGrant = (grantUpdated) => {
    grant.title = grantUpdated.title,
      grant.category = grantUpdated.category,
      grant.cfda = grantUpdated.cfda,
      grant.opportunityNumber = grantUpdated.opportunityNumber,
      grant.matchingRequired = grantUpdated.matchingRequired,
      grant.dateDue = grantUpdated.dateDue,
      grant.totalFunding = grantUpdated.totalFunding,
      grant.tiawardCeilingtle = grantUpdated.tiawardCeilingtle,
      grant.awardFloor = grantUpdated.awardFloor
  }

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
        {grant.category && <Wrapper><span>Category:</span><Content input={grant.category} /></Wrapper>}
        {grant.cfda && <Wrapper><span>CFDA Number(s):</span><Content input={grant.cfda} /></Wrapper>}
        {grant.matchingRequired && <Wrapper><span>Cost Sharing or Matching Requirement:</span><Content input={grant.matchingRequired} /></Wrapper>}
        {grant.dateDue && <Wrapper><span>Estimated Application Due Date:</span><Content input={grant.dateDue} /></Wrapper>}
        {grant.totalFunding && <Wrapper><span>Estimated Total Program Funding:</span><Content input={grant.totalFunding} /></Wrapper>}
        {grant.awardCeiling && <Wrapper><span>Award Ceiling:</span><Content input={grant.awardCeiling} /></Wrapper>}
        {grant.awardFloor && <Wrapper><span>Award Floor:</span><Content input={grant.awardFloor} /></Wrapper>}
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
        <Wrapper justify='space-around'>
          <Button radius='32px 32px' padding='0em 1.5em' onClick={() => setModalIsOpen(!modalIsOpen)}><FaEdit /></Button>
          <Button onClick={() => window.open(`https://apply07.grants.gov/apply/login.faces?oppId=${grant.idGrant}&origin=vgo-apply`)}>Apply</Button>
        </Wrapper>
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
      <Form grant={grant} update={updateGrant} close={() => setModalIsOpen(false)} isOpen={modalIsOpen} />
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
