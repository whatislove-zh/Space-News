import { Divider, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectPostsInfo } from '../store/posts/posts-selectors';

export const Results = () => {

  const { qty } = useSelector(selectPostsInfo);

  return (
    <>
    <Typography>Result {qty}</Typography>
    <Divider />
    </>
  )
}
