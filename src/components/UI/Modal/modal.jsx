import React from 'react';
import BackDrop from "../Backdrop/backdrop";

import classes from "./modal.module.css";

class Model extends React.Component {


     shouldComponentUpdate(nextProps, nextState) {
          return nextProps.show !== this.props.show ||
          nextProps.children !== this.props.children;
     };

     render() {
          return(
               //if Modal props.show is on, then BackDrop props.show is on.
               <React.Fragment>
                    <BackDrop 
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                  
                    /> 
                    <div className={classes.Modal}
                         style={{
                              transform: this.props.show
                              ? 
                              "translateY(0)"
                              :
                              "translateY(-100vh)", 
     
                              opacity: this.props.show
                              ?
                              "1"
                              :
                              "0"
                         }}
                         >
                         {this.props.children}
                    </div> 
               </React.Fragment>
          )
     }
    
}
export default Model;