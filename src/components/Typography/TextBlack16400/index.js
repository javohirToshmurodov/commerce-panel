import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textLightBlack } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "18.83px",
      color: textLightBlack,
   }
})
const TextBlack16400 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextBlack16400