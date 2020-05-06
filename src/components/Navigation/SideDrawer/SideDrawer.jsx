import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/backdrop";


import classes from "./SideDrawer.module.css"

const SideDrawer = (props) => {
     let attachedClasses = [classes.SideDrawer, classes.Close];

     if (props.openSideDrawer) {
          attachedClasses = [classes.SideDrawer, classes.Open];
     }
     return(
          <React.Fragment>
               <BackDrop show={props.openSideDrawer} clicked={props.closeSideDrawer}/>
               <div className={attachedClasses.join(" ")}>
                    {/* <Logo height="11%"/> */}
                    <div className={classes.Logo}>
                         <Logo/>
                    </div>
                    
                    <nav>
                         <NavigationItems />

                    </nav>
               </div>
          </React.Fragment>
     );
}
export default SideDrawer;