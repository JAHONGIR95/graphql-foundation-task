import React from "react"
import "./main.css"

const Pagination = ({ setPage, setLimit }) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="pagination">
      <button
      key={99}
        onClick={() => {
          setPage(0)
          setLimit(null)
        }}
      >
        All
      </button>
      {arr.map((num, index) => (
        <button
          onClick={() => {
            setPage(num)
            setLimit(4)
          }}
          key={index + num}
        >
          {num + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination
