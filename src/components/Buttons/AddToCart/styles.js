import { makeStyles } from '@mui/styles'
import { colors } from '../../../colors'
const { textGreen, textWhite } = colors
export const btnStyles = makeStyles({
   btn: {
      backgroundColor: `${textGreen} !important`,
      padding: "16px 0 17px 0 !important",
      width: "100% !important",
      borderRadius: "26px !important",
      fontFamily: "Gilroy-Semibold, sans-serif",
      color: `${textWhite} !important`,
      fontSize: "16px !important",
      lineHeight: "19px !important",
      letterSpacing: "0.01em !important"
   }
})