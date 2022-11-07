import { Box } from '@mui/material'
import React from 'react'
import { checkoutStyles } from '../Checkout/styles'

const Products = () => {
   const classes = checkoutStyles()
   return (
      <Box className={classes.root}>
         <Box className={classes.container}>
            Товары
         </Box>
      </Box>
   )
}

export default Products