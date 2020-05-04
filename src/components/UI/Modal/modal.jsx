import React from 'react';
import BackDrop from "../Backdrop/backdrop";

import classes from "./modal.module.css";

const Model  = (props) => {
     return(
          //if Modal props.show is on, then BackDrop props.show is on.
          <React.Fragment>
               <BackDrop show={props.show}
               clicked={props.modalClosed}/> 
               <div className={classes.Modal}
                    style={{
                         transform: props.show
                         ? 
                         "translateY(0)"
                         :
                         "translateY(-100vh)", 

                         opacity: props.show
                         ?
                         "1"
                         :
                         "0"
                    }}
                    >
                    {props.children}
               </div> 
          </React.Fragment>
     )
}
export default Model;