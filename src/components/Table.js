import React from "react"
import Row from "./Row"
import './main.css'

function Table({ data, page, colsTitle, link }) {
  return (
    <table>
      <tr>
        <th>#</th>
        {
          colsTitle?.map((col, index) => (
            <th key={index + col?.name}>{col?.name}</th>
          ))
        }
    
      </tr>
      <tbody>
        {
          data?.map((item, index) => (
            <Row page={page} key={index + data?.id} data={item} link={link} colsTitle={colsTitle} id={index} />
          ))
        }
      </tbody>
    </table>
  )
}

export default Table
