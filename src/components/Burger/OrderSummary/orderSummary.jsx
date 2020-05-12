import React from "react";
import  Button from "../../UI/Button/button";
import classes from "./orderSummary.module.css";

const OrderSummary = (props) => {
     const ingredientsSummary = Object.keys(props.ingredients)
     .map(ingKey => {
     return <li
               key={ingKey}
               style={{textTransform: "capitalize"}}>
               {ingKey} 
               <span>
                    :{props.ingredients[ingKey]}
               </span>
          </li>
     })
     return(
         <div className={classes.OrderSummary}>
              <h3>Order Summary</h3>
              <p>Added Ingredients list: </p>
              <ul>
                    { 
                    props.price === 0
                    ?
                    null
                    :
                    ingredientsSummary
                    }
              </ul>
              <p><strong> {
                         props.price > 0
                         ?
                    `Price:  $${props.price.toFixed(2)}` 
                         :
                         null
                    } </strong>
               </p>
              <p>Checkout?</p>
               <div>
                    <Button btnType="Success" clicked={props.orderConfirm}>Yes</Button>
                    <Button btnType="Danger" clicked={props.orderCancel}>No</Button>
                    
              </div>   
         </div>
     )
}
export default OrderSummary;