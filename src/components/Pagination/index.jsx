import React from 'react'
import { RcPagination } from "./style";

const Pagination = ({ next, prev, change }) => {
  return (
    <RcPagination onChange={change} total={500} jumnexticon={next} jumprevicon={prev} />
  )
}

export default Pagination
