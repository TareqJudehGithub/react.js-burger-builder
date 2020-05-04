import React from "react"
import classes from "./orderSummary.module.css";
const OrderSummary = (props) => {
     const ingredientsSummary = Object.keys(props.ingredients)
     .map(ingKey => {
     return <li
               key={ingKey}
               style={{textTransform: "capitalize"}}>
               {ingKey} <span>
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
              <p>Checkout?</p>
         </div>
     )
}
export default OrderSummary;