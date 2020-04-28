import React from 'react';
import { Wrapper, InputTag } from "./style";

const Input = ({ label, placeholder, type = 'text', change }) => {
  return (
    <Wrapper>
      <label>{label}</label> <InputTag type={type} placeholder={placeholder} onChange={change} />
    </Wrapper>
  )
}

export default Input
