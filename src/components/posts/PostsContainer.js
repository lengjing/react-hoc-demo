import React from 'react'
import Post from './Post'
import isContainer from '../../hoc/isContainer'
import isList from '../../hoc/isList'
import { compose } from '../../utils'

const PostDefault = props => <div className="no-posts">No posts to display.</div>

export default compose(
  isContainer({
    data: {
      url: 'https://jsonplaceholder.typicode.com/posts',
      loadingMessage: "Loading posts..."
    },
    DefaultComponent: PostDefault
  }),
  isList('posts')
)(Post)
