import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

export const BackToHomeBtn = () => {

    const navigate = useNavigate()
  return (
    <Button size="small" color="secondary" onClick={() => navigate(-1)}> Back to homepage</Button>
  )
}
