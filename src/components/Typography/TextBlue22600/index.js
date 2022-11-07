import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textBlueAdmin } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 22,
      fontFamily: "Gilroy-Semibold, sans-serif",
      lineHeight: "26px",
      color: textBlueAdmin,
   }
})
const TextBlueAdmin = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextBlueAdmin