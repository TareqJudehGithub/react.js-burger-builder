import {makeStyles} from "@material-ui/styles";
import theme from "../theme/theme";

const styling = makeStyles({
     toolbarMargin: {
          ...theme.mixins.toolbar,
          marginBottom: "3em"
     },
     tabContainer: {
          marginLeft: "auto",
     },
     tab: {
          ...theme.typography.tab,
          minWidth: 10,
          "&:hover": {
               fontWeight: "bold"
          }
     },
     logoContainer: {
          marginRight: "auto",
          backgroundColor: "transparent",
          borderRadius: "50px",
          padding: 0,
               "&:hover": {
               }
     },
     logo: {
          height: "4em"
     },
     menu: {
          backgroundColor: theme.palette.common.primary,
          borderRadius: "10px",
          color: "white",
          marginTop: "50px",
          width: "150px"
     },
     menuItem: {
          ...theme.typography.tab,
          ...theme.typography.menuItem
     }
})
export default styling;