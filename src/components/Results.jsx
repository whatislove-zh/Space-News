import { Divider, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

import { selectVisiblePosts } from '../store/posts/posts-selectors';
import { selectSearch } from '../store/controls/controls-selectors';

export const Results = () => {

  const search = useSelector(selectSearch)
  
  const posts = useSelector((state) => (
    selectVisiblePosts(state, {search})
  ))

  const qty = posts.length

  return (
    <>
    <Typography>Result {qty}</Typography>
    <Divider />
    </>
  )
}
