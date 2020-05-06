import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
     { id: 1, label: "Salad", type: "salad"},
     { id: 2, label: "Cheese", type: "cheese"},
     { id: 3, label: "Bacon", type: "bacon"},
     { id: 4, label: "Meat", type: "meat"}
];

const BuildControls = (props) => {
     
     return (
          <div className={classes.BuildControls}>
              
               {
               controls.map(control => {
                    return <BuildControl 
                              key={control.id}
                              label={control.label}
                              add={() => props.addIngredient(control.type)}
                              remove={() => props.removeIngredient(control.type)}
                              disableRemove={props.price <= 0}                              
                         />
               })
               }
                <p><strong> {
                         props.price > 0
                         ?
                    `Price:  $${props.price.toFixed(2)}` 
                         :
                         null
                    } </strong>
               </p>
               <button 
               className={classes.OrderButton}
               hidden={props.EnableOrderButton}
               onClick={props.ShowOrderMenu}> 
               Order
               </button>
          </div>    
     )   
}
export default BuildControls;