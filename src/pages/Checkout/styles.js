import { makeStyles } from "@mui/styles";
import { colors } from "../../colors";
const { mainBackground, textGreen, textWhite, imageWrapper, pinkSecondaryBadge } = colors
export const checkoutStyles = makeStyles({
   root: {
      flex: 1,
      boxSizing: 'border-box',
      padding: "20px 0px 16px 20px",
   },
   container: {
      backgroundColor: mainBackground,
      minHeight: `calc(100vh - 105px)`,
      borderRadius: "6px",
      padding: "20px 28px",
      boxSizing: "border-box",
      width: "1100px"
   },
   input: {
      display: "flex",
      marginTop: "20px"
   },
   button: {
      width: "100px !important",
      borderRadius: "0 26px 26px 0 !important",
      backgroundColor: `${textGreen} !important`,
      textAlign: "center !important"
   },
   wrapper: {
      marginTop: "30px"
   },
   row: {
      display: 'flex',
      justifyContent: "flex-start",
      flexWrap: "wrap",
      gap: "25px",
      marginTop: "20px"
   },
   card: {
      backgroundColor: textWhite,
      width: "18%",
      borderRadius: "10px",
      padding: "12px",
      boxSizing: "border-box",
      textAlign: "center"
   },
   imageWrapper: {
      backgroundColor: imageWrapper,
      borderRadius: "6px",
      padding: "12px 0",
      boxSizing: "border-box",
      position: "relative",
      maxHeight: "165px"
   },
   badge: {
      color: textWhite,
      backgroundColor: pinkSecondaryBadge,
      padding: "2px 6px"
   },
   footer: {
      display: "flex",
      marginTop: "6px",
      alignItems: "center",
      gap: "6px"
   },
   badges: {
      position: "absolute",
      top: "12px",
      left: "6px",
      display: "flex",
      flexDirection: "column",
   },
   pagination: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
   }
})