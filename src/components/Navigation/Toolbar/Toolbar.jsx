import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo";

const Toolbar = (props) => {
     return (
          <header className={classes.Toolbar}>
              <DrawerToggle clicked={props.DrawerToggleClicked}/>
               {/* <Logo height="80%"/>    */}
               <div className={classes.Logo}>
                    <Logo/>
               </div>           
               <nav
               className={classes.DesktopOnly}
               >
                    <NavigationItems />
               </nav>
          </header>
     )
     
}

export default Toolbar;