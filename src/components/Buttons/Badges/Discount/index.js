import { ButtonBase } from '@mui/material'
import React from 'react'
import { colors } from '../../../../colors'
import { icons } from '../../../../images'
const { warningBadge } = colors
const { iconDiscount } = icons
const DiscountBadge = () => {
   return (
      <ButtonBase sx={{
         backgroundColor: `${warningBadge} !important`,
         padding: "6px 10px !important",
         borderRadius: "6px",
         marginTop: "6px"
      }}>
         <img src={iconDiscount} alt="" />
      </ButtonBase>
   )
}

export default DiscountBadge