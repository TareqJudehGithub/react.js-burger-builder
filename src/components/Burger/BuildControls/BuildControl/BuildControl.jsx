import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
     return (
          <div className={classes.BuildControl}>
               <div className={classes.Label}>{props.label}</div>
               <button 
               className={classes.Less}
               onClick={props.remove}
               disabled={props.disabled} //disabled is a default html
               >
                    &#8826;
               </button>

               <button 
               className={classes.More}
               onClick={props.add}
               >    
                    &#8827;
               </button>
          </div>
     )
}
export default BuildControl;
