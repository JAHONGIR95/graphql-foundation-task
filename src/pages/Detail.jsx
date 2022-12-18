import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { request } from "../utils/http-server"
import { singlePost, updatePost, updatePosts } from "../utils/queries"
import "./main.css"

function Detail() {
  const history = useHistory()
  let { id } = useParams()
  let idType = id === "create"

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [branch, setBranch] = useState("")
  const [views, setViews] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (idType) {
       return null
    } else {
      request(updatePosts, {
        id,
        title,
        views: +views
      })
      .then(res => res.json())
      .then(() => history.push('/all'))
    }
  }

  useEffect(() => {
    if (!idType) {
      request(singlePost, { id })
        .then((res) => res.json())
        .then(({ data }) => {
          let post = data?.Post
          setTitle(post?.title)
          setBranch(post?.User?.Branch?.name)
          setAuthor(post?.User?.name)
          setViews(post?.views)
        })
    }
  }, [])

  return (
    <div>
      <form className="single_post_form" onSubmit={(e) => handleSubmit(e)}>
        <label>
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e?.target.value)}
            required
            type="text"
            name="title"
          />
        </label>
        <label>
          Author
          <input
            value={author}
            onChange={(e) => setAuthor(e?.target.value)}
            required
            type="text"
            name="author"
            disabled={!idType}
          />
        </label>
        <label>
          Branch
          <input
            value={branch}
            onChange={(e) => setBranch(e?.target.value)}
            required
            type="text"
            name="branch"
            disabled={!idType}
          />
        </label>
        <label>
          Views
          <input
            value={views}
            onChange={(e) => setViews(e?.target.value)}
            required
            type="number"
            name="views"
          />
        </label>
        <button type="submit">
          Update Post
        </button>
      </form>
    </div>
  )
}

export default Detail
