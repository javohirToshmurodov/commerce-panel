import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textGreen } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "14px",
      color: textGreen,
   }
})
const TextGreen12500 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextGreen12500