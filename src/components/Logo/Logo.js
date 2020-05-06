import React from "react";
import BurgerLogo from "../../assets/Images/burger-logo.png";
import classes from "./Logo.module.css"

const Logo = (props) => {

     return(
          //height props is passed in both Toolbar and SideDrawers.
          <div className={classes.Logo} style={{height: props.height}}>
               <img src={BurgerLogo} alt="burger"/>
          </div>
     )
}
export default Logo;