import { Box } from '@mui/material'
import React from 'react'
import { checkoutStyles } from '../Checkout/styles'

const Reviews = () => {
   const classes = checkoutStyles()
   return (
      <Box className={classes.root}>
         <Box className={classes.container}>
            Отзывы
         </Box>
      </Box>
   )
}

export default Reviews