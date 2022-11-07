import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import { colors } from '../../colors'
const { imageWrapper } = colors
const lineStyles = makeStyles({
   line: {
      width: "100%",
      height: "1px",
      backgroundColor: imageWrapper,
      margin: "15px 0"
   }
})
const Line = () => {
   const classes = lineStyles()
   return (
      <Box className={classes.line}></Box>
   )
}

export default Line