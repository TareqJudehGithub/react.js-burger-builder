import React from "react";
import Modal from "../../components/UI/Modal/modal";
// import axios from "axios";

const withErrorHandler = (WrappedComponent, axios) => {
     
     return class extends React.Component {
          state = {error: null};
         
          componentDidMount () {
               this.reqInterceptor =
               axios.interceptors.request.use(req => {
                    this.setState({error: null});
                    return req;
               });
               this.resInterceptor =
               axios.interceptors.response.use(res => res, err => {
                    this.setState({error: err})
               });
          }  
          //to prevent memo leaks
          componentWillUnmount()   {
               console.log("WillUnMount", this.reqInterceptor, this.resInterceptor);
               axios.interceptors.request.eject(this.reqInterceptor);
               axios.interceptors.response.eject(this.resInterceptor);
          }
          //clearing error method:     
          errorClearHandler = () => {
               this.setState({error: null})
          }

          render() {
               return (
                    <React.Fragment>
                    <Modal
                    show={this.state.error}
                    modalClosed={this.errorClearHandler}
                    >
                         {
                              this.state.error
                              ?
                              this.state.error.message
                              :
                              null
                         }
                         
                    </Modal>
                    <WrappedComponent {...this.props}/>
                    </React.Fragment>
               )
          }        
     }
}
export default withErrorHandler