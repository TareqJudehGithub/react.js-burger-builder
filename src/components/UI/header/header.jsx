import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Tabs, Tab, Menu, MenuItem, Button} from "@material-ui/core";
import Logo from "../../../assets/Images/burgerLogo.png";
import styling from "./styling";
import { useState } from "react";

// const styles = makeStyles(theme => ({
//      tab: {
//           ...theme.typography.tab
//      }
// }));

const Header = () => {

     // const classes = styles();
     const importedClasses = styling();

     //states:
     const [value, setValue] = useState(0);

     //menu states:
     const [anchorEL, setAnchorEL] = useState(null);
     const [open, setOpen] = useState(false);
          //1. menu selection state:
               const [selectedIndex, setSelectedIndex] = useState(0);
          

//methods:
     //navigating tabs
     const handleChange = (event, value) => {
          setValue(value)
     };
     //menu:
     const handleClick = (event) => {
          setAnchorEL(event.currentTarget);
          setOpen(true);
     };
     const handleClose = () => {
          setAnchorEL(null);
          setOpen(false);
     }

     return(
          <React.Fragment>
             <AppBar position="fixed" color="primary">
                  <Toolbar disableGutters>
                         <Button 
                              variant="text"
                              className={importedClasses.logoContainer}
                              onClick={() => setValue(0)}
                              component={Link} to="/"
                              >
                                   <img 
                                   className={importedClasses.logo}
                                   src={Logo} 
                                   alt="burger logo"
                                  
                                   />
                         </Button>   
                         <Tabs 
                         className={importedClasses.tabContainer}
                         // indicatorColor="secondary"
                         onChange={handleChange}
                         value={value}
                         >
                              <Tab 
                              className={importedClasses.tab}
                              label="Home"
                              component={Link} to="/"
                              onClick={handleClick}
                              // onMouseOver={handleClick}
                              aria-owns={anchorEL ? "simple-menu" : undefined}
                              aria-haspopup={anchorEL ? "true": undefined}
                                   /> 
                              <Tab 
                              className={importedClasses.tab}
                              component={Link} to="/checkout"
                              label="Checkout"
                              /> 
                         </Tabs>
                              <Menu
                              classes={{paper: importedClasses.menu}}
                              id="simple-menu"
                              anchorEl={anchorEL}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{onMouseLeave: handleClose}}
                              elevation={0}
                              >
                                   <MenuItem
                                   classes={{root: importedClasses.menuItem}}>
                                        Menu Item
                                   </MenuItem>
                              </Menu> 
                  </Toolbar>
             </AppBar>
             <div className={importedClasses.toolbarMargin}/>
          </React.Fragment>
     )
}
export default Header;

