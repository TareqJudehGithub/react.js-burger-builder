import React from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/modal";
import OrderSummary from "../../components/Burger/OrderSummary/orderSummary";
import axios from "../../../src/axios-orders";
import Spinner from "../../components/UI/Spinner/spinner";
import withErrorHandler from "../../hoc/with-error-Handler/withErrorHandler";


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
               ingredients: null,
               totalPrice: 0, 
               orderButton: true,
               orderMenu: false,
               loading: false
          }
     };

     componentDidMount () {
          axios
          .get("https://react-burger-builder-12006.firebaseio.com/ingredients.json")
          .then(response => {
               this.setState({ingredients: response.data})
          })
          .catch(err => console.log(err));
     }
     //methods:
     disableMenuButtons = () => {
         Object.keys(this.state.ingredients)
     }
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
          this.setState({loading: true});

          const order = {
               ingredients: this.state.ingredients,
               price: this.state.totalPrice,
               customer: {
                    name: "John Smith",
                    address: {
                         Area: "Rawabi",
                         street: "Sabr",
                         zipCode: "11831",
                         city: "Amman",
                         country: "Jordan"
                    },
                    email: "john.smith@email.com"
               },
               deliveryMethod: "fast"
          };
          //setting up the URL we want to send request to (post):
          //for Firebase:   ("/anyName.json") .json for Firebase.
          axios.post("/orders.json", order)
               .then(response => {
                    this.setState({
                         loading: false,
                         orderMenu: false
                    });
                     alert(`   Thank you for your order! 
          Your total is $${this.state.totalPrice}`); 
               })
               .catch(err => { 
                    console.log(err);
                    this.setState({
                         loading: false,
                         orderMenu: false
                    });
               });           
         
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
          if( ingredients <= 0 ) {
               return;
          }
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

          
          if (this.state.loading) {

          }
          return (
               <React.Fragment>
                    {
                         this.state.ingredients
                         ?

                         <div>

                              <Burger ingredients={this.state.ingredients}/>
                              <BuildControls
                              addIngredient={this.addIngredientHandler}
                              removeIngredient={this.removeIngredientHandler}
                              ingredients={this.state.ingredients}
                              price={this.state.totalPrice}
                              EnableOrderButton={this.state.orderButton}
                              ShowOrderMenu={this.orderMenuHandler}
                              MenuButtons={this.disableMenuButtons}
                              />
                              <Modal show={this.state.orderMenu}
                    modalClosed={this.orderCancelHandler}>
                         {
                              this.state.loading
                              ?
                              <Spinner />
                              :
                              <OrderSummary 
                              ingredients={this.state.ingredients}
                              orderCancel={this.orderCancelHandler}
                              orderConfirm={this.orderConfirmHandler}
                              price={this.state.totalPrice}
                              />
                         }
                        
                    </Modal>
                         </div>
                         :
                         <Spinner />
                    }
                    

                    
               </React.Fragment>
          )
     }
}

export default withErrorHandler(BurgerBuilder, axios) ;