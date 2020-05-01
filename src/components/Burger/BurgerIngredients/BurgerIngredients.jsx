import React from "react";

import PropTypes from "prop-types";
import classes from "./BurgerIngredients.module.css";

const BurgerIngredients = (props) => {

     let ingerdient = null;

     switch (props.type) {
          case ("bread-bottom"):
               ingerdient = <div className={classes.BreadBottom}></div>;
               break;
          case ("bread-top"):
               ingerdient = (
                              <div className={classes.BreadTop}>
                                   <div className={classes.Seeds1}></div>
                                   <div className={classes.Seeds2}></div>
                              </div>
                         )
               break;
          case ("meat"):
               ingerdient = <div className={classes.Meat}></div>
               break;
          case ("cheese"):
               ingerdient = <div className={classes.Cheese}></div>
               break;
          case ("salad"):
               ingerdient = <div className={classes.Salad}></div>
               break;
          case ("bacon"):
               ingerdient = <div className={classes.Bacon}></div>
               break;
          default:
               ingerdient = null;
     }
     return ingerdient;

}

BurgerIngredients.prototype = {
     type: PropTypes.string.isRequired
}

export default BurgerIngredients;