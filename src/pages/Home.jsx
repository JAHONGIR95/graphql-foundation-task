import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Pagination from "../components/Pagination"
import Table from "../components/Table"
import { request } from "../utils/http-server"
import { getAllPosts, getPosts } from "../utils/queries"

function Home() {
  const [posts, setPosts] = useState()
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(null);
  const history = useHistory()

  const colsTitle = [
    { name: "Title", body: "title" },
    { name: "Author", body: "author" },
    { name: "Branch", body: "branch" },
    { name: "Views", body: "views" },
  ]

  useEffect(() => {
    request(getPosts, { page, perPage: limit })
      .then((res) => res.json())
      .then(({ data }) => {
        let newList = []

        data?.allPosts?.forEach((post) => {
          newList.push({
            id: post?.id,
            title: post?.title,
            author: post?.User?.name,
            branch: post?.User?.Branch?.name,
            views: post?.views,
          })
        })

        setPosts(newList)
      })
  }, [page, limit])

  return (
    <div>
      <Table page={page} data={posts} link="all" colsTitle={colsTitle} />
      <Pagination setPage={setPage} setLimit={setLimit} />
    </div>
  )
}

export default Home
