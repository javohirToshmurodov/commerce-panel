import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'
import { colors } from "../../../colors";

const { textLightBlack } = colors

const useStyles = makeStyles({
   text: {
      fontSize: 15,
      fontWeight: 400,
      lineHeight: "17.4px",
      color: textLightBlack,
      letterSpacing: "-0.3px"
   }
})
const TextBlack15400 = ({ text }) => {
   const classes = useStyles()
   return (
      <Box className={classes.text}>
         {text}
      </Box>
   )
}

export default TextBlack15400