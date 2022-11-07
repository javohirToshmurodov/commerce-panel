import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textBlueAdmin } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "19px",
      color: textBlueAdmin,
      letterSpacing: "-0.3px"
   }
})
const TextBlue16500 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextBlue16500