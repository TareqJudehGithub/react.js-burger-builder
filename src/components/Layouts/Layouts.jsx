import React from "react";
import classes from  "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component{
     state = {
          showSideDrawer: true
     }
     sideDrawerCloseHandler = () => {
          this.setState({showSideDrawer: false})
     }
     //150. 4C
     SideDrawerToggleHandler = () => {
          this.setState((prevState) => {
               return {showSideDrawer: !prevState.showSideDrawer};
          });
     }
     render()
     {
          return (
               <React.Fragment>
                    <Toolbar DrawerToggleClicked={this.SideDrawerToggleHandler}/>
                    <SideDrawer 
                    closeSideDrawer={this.sideDrawerCloseHandler}
                    openSideDrawer={this.state.showSideDrawer}
                    />
                    <main className={classes.Content}>
                         {this.props.children}
                    </main>
               </React.Fragment>
          )
     }
     
}

export default Layout;