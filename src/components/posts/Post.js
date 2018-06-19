import React from 'react'

const Post = ({title, body}) => (
  <div className="post">
    <h2>{title}</h2>
    <div>{body}</div>
  </div>
)

export default Post
