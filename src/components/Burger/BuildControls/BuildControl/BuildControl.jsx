import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
     return (
          <div className={classes.BuildControl}>
               <div className={classes.Label}>{props.label} ${props.price}</div>
               {/* <div className={classes.Price}></div> */}

               <button 
               className={classes.Less}
               onClick={props.remove}
               disabled={props.disableRemove}
               >
                    &#8826;
               </button>

               <button 
               className={classes.More}
               onClick={
                    props.add
                    // console.log("clicking")
                    
               }
               
               >    
                    &#8827;
               </button>
          </div>
     )
}
export default BuildControl;
