import { Box, Typography } from '@mui/material'
import React from 'react'

function Transaction(props) {
  return (
        <Box>
          <Typography variant='h5'>{props.val[1]}</Typography>
          <Typography variant='h5'>{props.val[0]}</Typography>
        </Box>
  )
}

export default Transaction