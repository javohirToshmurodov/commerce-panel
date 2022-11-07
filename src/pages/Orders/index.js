import { Box } from '@mui/material'
import React from 'react'
import { checkoutStyles } from '../Checkout/styles'

const Orders = () => {
   const classes = checkoutStyles()
   return (
      <Box className={classes.root}>
         <Box className={classes.container}>
            Заказы
         </Box>
      </Box>
   )
}

export default Orders