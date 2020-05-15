import {createMuiTheme} from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
// const orange = "#FF4314";
const orange = deepOrange.A400;
const white = deepOrange[50];

export default createMuiTheme({
     palette: {
          common: {
               primary: `${orange}`,
               secondary: `${white}`
          },
          primary: {
               main: `${orange}`
          },
          secondary: {
               main: `${white}`
          }
     },
     typography: {
          tab: {
               fontWeight: 400,
               fontSize: "15px"
          },
          menuItem: {
               fontSize: "0.95rem"
          }
     }
})


// import {createMuiTheme} from '@material-ui/core/styles';

// const deepOrange = "#FF4314";
// const white =  "#FFFFFF";

// export default createMuiTheme({
//      palette: {
//           common: {
//                blue: `${deepOrange}`,
//                orange: `${white}`
//           },
//           primary: {
//                main: `${deepOrange}`
//           },
//           secondary: {
//                main: `${white}`
//           }
//      }
// });