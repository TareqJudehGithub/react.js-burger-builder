import React from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/modal";
import OrderSummary from "../../components/Burger/OrderSummary/orderSummary";

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
               totalPrice: 0, 
               orderButton: true,
               orderMenu: false
          }
     };
     //methods:
     orderMenuHandler = () => {
          this.setState({
               orderMenu: true
          });
     };
    
     updateOrderBtnState (ingredients) {
          const values = Object.keys(this.state.ingredients)
                         .map(key => {
                              return ingredients[key];
                         })
                         .reduce((type, value) => {
                              return type + value;  
                         }, 0);
                         this.setState({ orderButton: values === 0})
                              
     };
     //Canceling order menu, going back to main menu:
     orderCancelHandler = () => {
          this.setState({orderMenu: false})
     };
     orderConfirmHandler = () => {
          alert(`   Thank you for your order! 
          Your total is $${this.state.totalPrice}`);
     
     }
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
           this.updateOrderBtnState(updatedState);
     };
     removeIngredientHandler = (itemToRemove) => {
          const ingredients = this.state.ingredients[itemToRemove];
          const qty = ingredients - 1;
          const updatedState = {...this.state.ingredients}
          updatedState[itemToRemove] = qty;

          const priceDeduction = INGREDIENT_PRICES[itemToRemove];
          const oldPrice = this.state.totalPrice;
          const newPrice = oldPrice - priceDeduction ;
          this.setState({
               totalPrice: newPrice,
               ingredients: updatedState
          })
          this.updateOrderBtnState(updatedState);
     };
     render() {
          return (
               <React.Fragment>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    EnableOrderButton={this.state.orderButton}
                    ShowOrderMenu={this.orderMenuHandler}
                    />

                    <Modal show={this.state.orderMenu}
                    modalClosed={this.orderCancelHandler}>
                         <OrderSummary 
                         ingredients={this.state.ingredients}
                         orderCancel={this.orderCancelHandler}
                         orderConfirm={this.orderConfirmHandler}
                         price={this.state.totalPrice}
                         />
                    </Modal>
               </React.Fragment>
          )
     }
}

export default BurgerBuilder;