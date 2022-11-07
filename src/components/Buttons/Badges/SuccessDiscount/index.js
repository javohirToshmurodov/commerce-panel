import { ButtonBase } from '@mui/material'
import React from 'react'
import { colors } from '../../../../colors'
import { icons } from '../../../../images'
const { greenBadge } = colors
const { iconSuccessDiscount } = icons
const SuccessDiscountBadge = () => {
   return (
      <ButtonBase sx={{
         backgroundColor: `${greenBadge} !important`,
         padding: "6px 10px !important",
         borderRadius: "6px",
         marginTop: "6px"
      }}>
         <img src={iconSuccessDiscount} alt="" />
      </ButtonBase>
   )
}

export default SuccessDiscountBadge