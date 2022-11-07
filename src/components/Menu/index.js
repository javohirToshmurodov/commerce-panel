import { Box } from '@mui/material'
import React, { useState } from 'react'
import { icons } from '../../images'
import { menuStyles } from './styles'
import { menuData } from './menudata'
import { NavLink } from 'react-router-dom'
import { colors } from '../../colors'
import TextWhite16500 from '../Typography/Textwhite16500'
import TextBlue16500 from '../Typography/TextBlue16500'
const { textBlueAdmin, textWhite } = colors
const Menu = () => {
   const classes = menuStyles()
   const [menuIdx, setMenuIdx] = useState('')
   const funNavLink = ({ isActive }, idx) => {
      if (isActive) {
         setMenuIdx(idx)
      }
      return ({
         backgroundColor: isActive ? textWhite : undefined,
      })
   }
   return (
      <Box className={classes.menu}>
         <Box className={classes.body}>

            {
               menuData.map((e, i) => !e.hidden && <NavLink
                  to={e.url}
                  style={isActive => funNavLink(isActive, e.id)}
                  className={classes.link}
                  key={e.id}>
                  {
                     e.id === menuIdx ?
                        <img src={e.activeIcon} /> :
                        <img src={e.icon} />
                  }

                  {e.id === menuIdx ?
                     <TextBlue16500 text={e.text} /> :
                     <TextWhite16500 text={e.text} />
                  }
               </NavLink>)
            }
         </Box>
      </Box>
   )
}

export default Menu