import { Badge, Box } from '@mui/material'
import React from 'react'
import { icons } from '../../images'
import TextWhite16400 from '../Typography/Textwhite16400'
import TextBlack16600 from '../Typography/TextBlack16600'

import { navbarStyles } from './style'

const Navbar = () => {
   const classes = navbarStyles()
   const { iconNotification, iconProfile } = icons

   return (
      <Box className={classes.container}>
         <Box padding={"16px 0 0 62px"}>
            <h5 className={classes.logo}>Logo</h5>
         </Box>
         <Box>
            <Box className={classes.right}>
               <Badge badgeContent={4} color="success">
                  <img src={iconNotification} alt="" />
               </Badge>
               <Box className={classes.user}>
                  <TextWhite16400 text={"Личный кабинет"} />
                  <img src={iconProfile} alt="" />
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default Navbar