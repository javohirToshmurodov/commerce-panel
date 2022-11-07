import { makeStyles } from "@mui/styles";
import { colors } from "../../colors";


const { mainBackground, textGreen, textWhite, pinkSecondaryBadge } = colors
export const detailStyles = makeStyles({
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
   wrapper: {
      backgroundColor: textWhite,
      borderRadius: "16px",
      padding: "30px",
      marginTop: "30px",
      position: "relative"
   },
   slider: {
      borderRadius: "16px",
      overflow: "hidden",
      backgroundColor: mainBackground,
      width: "48%",
      padding: "20px",
      minHeight: "355px",
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
   },
   badges: {
      position: "absolute",
      top: "20px",
      left: "20px"
   },
   carousel: {

   },
   image: {
      width: "198px !important",
      height: "271px",
      objectFit: "cover"
   },
   right: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "40px"
   },
   rigthBlock: {
      width: "46.5%",
   },
   badge: {
      color: textWhite,
      backgroundColor: pinkSecondaryBadge,
      padding: "2px 6px"
   },
   tabs: {
      marginTop: "16px"
   },
   button1: {
      padding: "11px 0 !important",
      width: "110px !important",
      border: `1px solid ${textGreen} !important`,
      borderRight: "none !important",
      fontFamily: "Gilroy-Regular, sans-serif",
      borderRadius: "6px 0 0 6px  !important",
      backgroundColor: `${textGreen} !important`,
      color: `${textWhite} !important`


   },
   button: {
      padding: "11px 0 !important",
      width: "110px !important",
      border: `1px solid ${textGreen} !important`,
      borderRight: "none !important",
      fontFamily: "Gilroy-Regular, sans-serif",
   },
   button2: {
      padding: "11px 0 !important",
      width: "110px !important",
      border: `1px solid ${textGreen} !important`,
      borderRadius: "0 6px 6px 0 !important",
      fontFamily: "Gilroy-Regular, sans-serif",
   },
   detailsWrapper: {
      marginTop: "15px"
   },
   row: {
      display: "flex",
      justifyContent: "space-between"
   },
   // position add to cart
   positionCart: {
      position: "absolute",
      top: "-20px",
      right: "20px"
   },
   addToCart: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: pinkSecondaryBadge,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
   },
   addedCart: {
      padding: "10px 16px",
      backgroundColor: pinkSecondaryBadge,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px",
      borderRadius: "40px",
      width: "267px",
      height: "60px",
      boxSizing: 'border-box'
   },
   info: {
      backgroundColor: textWhite,
      color: pinkSecondaryBadge,
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      fontSize: "16px",
      fontWeight: "600",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   }
})