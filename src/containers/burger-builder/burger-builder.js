import React from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
     salad: 0.5,
     cheese: 1,
     meat: 2,
     bacon: 0.6
};

class BurgerBuilder extends React.Component {
     constructor() {
          super()
          this.state = {
               ingredients: {
                    salad: 0,
                    bacon: 0,
                    cheese: 0,
                    meat: 0
               },
               totalPrice: 1
          }
     }
     //methods:
     addIngredientHandler = (itemToAdd) => {
          
         const ingredients = this.state.ingredients[itemToAdd];
         const qty = ingredients + 1;
         const updatedState = {...this.state.ingredients}
         updatedState[itemToAdd] = qty;
       
          const priceAddition = INGREDIENT_PRICES[itemToAdd]
          const oldPrice = this.state.totalPrice;
          const newPrice = oldPrice + priceAddition;

          this.setState({
               totalPrice: newPrice,
               ingredients:updatedState
          });
     };
     removeIngredientHandler = (itemToRemove) => {
          const ingredients = this.state.ingredients[itemToRemove];
          const qty = ingredients - 1;
          const updatedState = {...this.state.ingredients}
          updatedState[itemToRemove] = qty;

          const priceDeduction = INGREDIENT_PRICES[itemToRemove];
          const oldPrice = this.state.totalPrice;
          const newPrice = oldPrice - priceDeduction;
          this.setState({
               totalPrice: newPrice,
               ingredients: updatedState
          })
     };
     render() {
          return (
               <React.Fragment>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    ingredients={this.state.ingredients}
                    />
               </React.Fragment>
          )
     }
}

export default BurgerBuilder;