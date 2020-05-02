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
     addIngredientHandler = (type) => {
          const oldCount = this.state.ingredients[type];
          const updatedCount = oldCount +1;
          const updatedIngredients = {...this.state.ingredients};
          updatedIngredients[type] = updatedCount;
          const priceAddition = INGREDIENT_PRICES[type]
          const oldPrice = this.state.totalPrice;
          const newPrice = oldPrice + priceAddition;

          this.setState({
               totalPrice: newPrice,
               ingredients: updatedIngredients
          });
     };
     removeIngredientHandler = (type) => {
          const oldCount = this.state.ingredients[type];
          if(oldCount  <= 0) {
               return;

          }
          const updatedCount = oldCount - 1;
          const updatedIngredients = {...this.state.ingredients}
          updatedIngredients[type] = updatedCount;
          const priceDeduction = INGREDIENT_PRICES[type];
          const oldPrice = this.state.totalPrice;
          const newPrice = oldPrice - priceDeduction;
          this.setState({
               totalPrice: newPrice,
               ingredients: updatedIngredients
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