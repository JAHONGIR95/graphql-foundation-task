import React from "react"
import { useHistory } from "react-router-dom"

function Row({ data, id, page, colsTitle, link = "" }) {
  const history = useHistory()

  return (
    <tr
      style={{ cursor: "pointer" }}
      onClick={() => history.push(`${link}/${data?.id}`)}
    >
      <td>{id + 1 + page * 4}</td>

      {colsTitle?.map((col, index) => (
        <td key={index}>{data[col.body]}</td>
      ))}
    </tr>
  )
}

export default Row
