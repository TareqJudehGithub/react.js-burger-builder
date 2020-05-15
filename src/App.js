import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
// import Layout from "./hoc/Layouts/Layouts";
import Header from "./components/UI/header/header";
import {ThemeProvider} from "@material-ui/core";
import theme from "./components/UI/theme/theme";
import BurgerBuilder from "./containers/burger-builder/burger-builder";
class App extends React.Component {
  render() {
    return (
      
    
      <ThemeProvider theme={theme}>
        <React.Fragment>
         
          <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path="/" component={BurgerBuilder}/>
              <Route path="/checkout" component={() => <div>Checkout</div>}/>
            </Switch>
          </BrowserRouter>
        {/* <Layout>     */}
        
            {/* < BurgerBuilder />        */}
     
        {/* </Layout> */}
        </React.Fragment>
      </ThemeProvider>
     
    );
  }
}
export default App;
