import { Box } from '@mui/material'
import React from 'react'
import { checkoutStyles } from '../Checkout/styles'

const Main = () => {
   const classes = checkoutStyles()
   return (
      <Box className={classes.root}>
         <Box className={classes.container}>
            Главная
         </Box>
      </Box>
   )
}

export default Main