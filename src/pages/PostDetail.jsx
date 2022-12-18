import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { request } from "../utils/http-server"
import { createPost, singlePost, updatePost, usersList } from "../utils/queries"
import "./main.css"

function PostDetail() {
  const history = useHistory()
  let { postId: id } = useParams()
  let idType = id === "create"

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [views, setViews] = useState()
  const [userList, setUserList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (idType) {
      request(createPost, {
        title: title.trim(),
        views: +views,
        user_id: author.trim(),
      })
      .then(res => res.json())
      .then(() => history.push('/posts'))
    } else {
      request(updatePost, {
        id,
        title: title.trim(),
        views: +views,
        user_id: author.trim()
      })
        .then((res) => res.json())
        .then(() => history.push('/posts'))
    }
  }

  useEffect(() => {
    if (!idType) {
      request(singlePost, { id })
        .then((res) => res.json())
        .then(({ data }) => {
          let post = data?.Post
          setTitle(post?.title)
          setAuthor(post?.User?.id)
          setViews(post?.views)
        })
    }

    request(usersList)
      .then((res) => res.json())
      .then(({ data }) => setUserList(data?.allUsers))
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
          Views
          <input
            value={views}
            onChange={(e) => setViews(e?.target.value)}
            required
            type="number"
            name="views"
          />
        </label>
        <label>
          Author
          <select value={author} name="author" required="required" onChange={(e) => setAuthor(e?.target.value)}>
            <option value="">Select one author</option>
            {userList?.map((user, index) => (
              <option key={index} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default PostDetail
