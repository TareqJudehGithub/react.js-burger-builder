import React from 'react';
import Layout from "./components/Layouts/Layouts";
import BurgerBuilder from "./containers/burger-builder/burger-builder";
class App extends React.Component {
  render() {
    return (
      <div >  
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
  
}

export default App;
