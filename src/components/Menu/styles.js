import { makeStyles } from "@mui/styles";
import { minHeight } from "@mui/system";
import { colors } from "../../colors";
const { textBlueAdmin, textWhite } = colors
export const menuStyles = makeStyles({
   menu: {
      backgroundColor: textBlueAdmin,
      minHeight: `calc(100vh - 124px)`,
      width: "263px",
      borderRadius: "0 30px 0 0",
      paddingTop: "54px",
      position: "sticky",
      top: "10px",
      left: "0px",
   },
   body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      position: "sticky",
      top: "30px"
   },
   menuLink: {
   },
   link: {
      color: textWhite,
      margin: "3px 0",
      gap: "16px",
      display: "flex",
      alignItems: "center",
      padding: "14.5px 0 16.5px 30px",
      borderRadius: "30px 0 0 30px",
      minWidth: "200px"
   }
})