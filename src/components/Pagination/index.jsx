import React from 'react'
import { RcPagination } from "./style";

const Pagination = ({ next, prev, change }) => {
  return (
    <RcPagination defaultpagesize={20} onChange={change} total={1000} jumnexticon={next} jumprevicon={prev} />
  )
}

export default Pagination
