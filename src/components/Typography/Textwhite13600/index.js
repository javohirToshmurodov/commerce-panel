import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textWhite } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 13,
      fontWeight: 600,
      lineHeight: "15.51px",
      color: textWhite,
   }
})
const TextWhite13600 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextWhite13600