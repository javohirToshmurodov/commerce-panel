import { ButtonBase } from '@mui/material'
import React from 'react'
import { colors } from '../../../../colors'
import { icons } from '../../../../images'
const { pinkBadge } = colors
const { iconReload } = icons
const ReloadBadge = () => {
   return (
      <ButtonBase sx={{
         backgroundColor: `${pinkBadge} !important`,
         padding: "6px 10px !important",
         borderRadius: "6px"
      }}>
         <img src={iconReload} alt="" />
      </ButtonBase>
   )
}

export default ReloadBadge