import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textWhite } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 17,
      fontWeight: 600,
      lineHeight: "19px",
      color: textWhite,
      letterSpacing: "0.01em"
   }
})
const TextWhite17600 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextWhite17600