import React, { useState } from 'react'
import { Container } from "../../layouts";
import { Wrapper, Button } from "../../styles/components";
import Input from "./../Input/index";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

const Form = ({ grant, close, isOpen, update }) => {
  const [title, setTitle] = useState(grant.title)
  const [opportunityNumber, setOpportunityNumber] = useState(grant.opportunityNumber)
  const [category, setCategory] = useState(grant.category)
  const [cfda, setCfda] = useState(grant.cfda)
  const [matchingRequired, setMatchingRequired] = useState(grant.matchingRequired)
  const [dateDue, setDateDue] = useState(grant.dateDue)
  const [totalFunding, setTotalFunding] = useState(grant.totalFunding)
  const [tiawardCeilingtle, setAwardCeiling] = useState(grant.awardCeiling)
  const [awardFloor, setAwardFloor] = useState(grant.awardFloor)
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      category,
      cfda,
      opportunityNumber,
      matchingRequired,
      dateDue,
      totalFunding,
      tiawardCeilingtle,
      awardFloor
    }
    const res = await fetch(`https://grants-licimatic.herokuapp.com/api/grants/${grant.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          grant: data
        })
      })
    if (res.status === 200) {
      update(data)
      close()
    }
  }

  const handleChange = (e) => {
    setGrantToUpdate()
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '70%'
        }
      }}
      contentLabel="Update information">
      <Container width='100%'>
        <Wrapper justify='flex-end'><MdClose color='red' onClick={close} size='2em' /></Wrapper>
        <form onSubmit={onSubmit}>
          <Wrapper justify='center'><h1>Update information</h1></Wrapper>
          <Wrapper><Input label='title' placeholder={grant.title} change={(e) => { setTitle(e.target.value) }} /></Wrapper>
          <Wrapper><Input label='Funding Opportunity Number:' placeholder={grant.opportunityNumber} change={(e) => { setOpportunityNumber(e.target.value) }} /></Wrapper>
          <Wrapper><Input label='Category' placeholder={grant.category} change={(e) => { setCategory(e.target.value) }} /></Wrapper>
          <Wrapper><Input label='CFDA Number(s):' placeholder={grant.cfda} change={(e) => { setCfda(e.target.value) }} /></Wrapper>
          <Wrapper><Input label='Cost Sharing or Matching Requirement:' placeholder={grant.matchingRequired} change={(e) => { setMatchingRequired(e.target.value) }} /></Wrapper>
          <Wrapper><Input label='Estimated Application Due Date:' placeholder={grant.dateDue} change={(e) => { setDateDue(e.target.value) }} /></Wrapper>
          <Wrapper><Input label='Estimated Total Program Funding:' placeholder={grant.totalFunding} change={(e) => { setTotalFunding(e.target.value) }} /></Wrapper>
          <Wrapper><Input label='Award Ceiling:' placeholder={grant.awardCeiling} change={(e) => { setAwardCeiling(e.target.value) }} /></Wrapper>
          <Wrapper><Input label='Award Floor:' placeholder={grant.awardFloor} change={(e) => { setAwardFloor(e.target.value) }} /></Wrapper>
          <Wrapper justify='center'><Button>Submit</Button></Wrapper>
        </form>
      </Container>
    </Modal>
  )
}

export default Form
