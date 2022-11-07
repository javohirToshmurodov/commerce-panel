import { ButtonBase } from '@mui/material'
import React from 'react'
import { btnStyles } from './styles'

const AddToCartButton = () => {
   const classes = btnStyles()
   return (
      <ButtonBase className={classes.btn}>Добавить в корзину</ButtonBase>
   )
}

export default AddToCartButton