import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textLightBlack } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 16,
      fontFamily: "Gilroy-Semibold, sans-serif",
      lineHeight: "19px",
      color: textLightBlack,
   }
})
const TextBlack16600 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextBlack16600