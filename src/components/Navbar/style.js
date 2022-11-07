import { makeStyles } from "@mui/styles";
import { colors } from "../../colors";
const { textBlueAdmin } = colors
export const navbarStyles = makeStyles({
   container: {
      display: "flex",
      justifyContent: "space-between"
   },
   right: {
      display: "flex",
      alignItems: "center",
      gap: "36px",
   },
   user: {
      backgroundColor: textBlueAdmin,
      display: "flex",
      padding: "19px 60px",
      borderRadius: "0 0 0 30px",
      alignItems: "center",
      gap: "12px",
   },
   logo: {
      fontFamily: "Inter, sans-serif",
      fontSize: "16px",
      fontWeight: "lighter"
   }
})