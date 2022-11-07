import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textGreen } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "19px",
      color: textGreen,
      letterSpacing: "0.01em"
   }
})
const TextGreen16600 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextGreen16600