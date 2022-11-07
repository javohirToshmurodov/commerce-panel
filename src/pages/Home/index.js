import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'
import { homeStyles } from './styles'

const Home = () => {
   const classes = homeStyles()
   return (
      <Box className={classes.home}>
         <Menu />
         <Outlet />
      </Box>
   )
}

export default Home