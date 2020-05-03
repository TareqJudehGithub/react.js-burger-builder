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
                              disabled={props.ingredients[control.type] <= 0 }
                         />
               })
               }
          </div>
          
     )   
}
export default BuildControls;