import React from "react";
import classes from "./button.module.css";
const Button = (props) => {
     return (
          <div>
               <button 
               className={
                    [classes.Button, classes[props.btnType]].join(" ")
               }
               onClick={props.clicked}>
                    {props.children}
               </button>
          </div>
     )
}
export default Button;