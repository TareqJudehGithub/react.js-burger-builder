import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

import classes from "./Burger.module.css";

const Burger = (props) => {
     let transformedIngredients = Object.keys(props.ingredients)
          .map(igKey => {  
               return [...Array(props.ingredients[igKey])].map((_, index) => {
                    return <BurgerIngredient 
                    key={igKey + index} 
                    type={igKey} 
                    />
               })               
          })
          .reduce((arr, el) => {  //to flatten the array;
               return arr.concat(el);
          });
          if(transformedIngredients.length === 0) {
               transformedIngredients = <p>Please add ingredients..</p>
          }
     
     return (
          <div className={classes.Burger}>
               <BurgerIngredient type="bread-top"/>
               {transformedIngredients}
               <BurgerIngredient type="bread-bottom"/>
          </div>
     )
}
export default Burger;