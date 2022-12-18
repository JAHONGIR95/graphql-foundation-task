import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Table from "../components/Table"
import { request } from "../utils/http-server"
import { onlyPosts } from "../utils/queries"

function Posts() {
  const history = useHistory()
  const [postsData, setPostsData] = useState([])

  const colsTitle = [
    { name: "Title", body: "title" },
    { name: "Views", body: "views" },
  ]

  useEffect(() => {
    request(onlyPosts)
      .then((res) => res.json())
      .then(({ data }) => setPostsData(data?.allPosts))
  }, [])

  return (
    <>
      <button
        className="create_button"
        onClick={() => history.push("/posts/create")}
      >
        Create
      </button>
      <Table data={postsData} link="posts" colsTitle={colsTitle} />
    </>
  )
}

export default Posts
