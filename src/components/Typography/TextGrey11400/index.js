import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textGrey } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 11,
      fontWeight: 400,
      lineHeight: "12.76px",
      color: textGrey,
      letterSpacing: "-0.3px"
   }
})
const TextGrey11400 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextGrey11400