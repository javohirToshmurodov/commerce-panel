import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textGrey } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "14px",
      color: textGrey,
   }
})
const TextGrey12400 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextGrey12400