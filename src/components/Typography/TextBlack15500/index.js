import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textLightBlack } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 15,
      fontFamily: "Gilroy-Semibold, sans-serif",
      lineHeight: "17.66px",
      color: textLightBlack,
      letterSpacing: "-0.3px"
   }
})
const TextBlack15500 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextBlack15500