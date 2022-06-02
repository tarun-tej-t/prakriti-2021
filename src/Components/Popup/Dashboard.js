import React, {Component} from "react";
import Modal from "./Modal.js";

class Dashboard extends Component{
 constructor(){
     super();
     this.state={
         show:true
     };
     
     this.hideModal=this.hideModal.bind(this);
 }

 
 hideModal=()=>{
     this.setState({show:false});
 }


render(){
    return(
    <main>
        
        <Modal show={this.state.show} handleClose={this.hideModal}   />
        
    </main>


    )
}
}

export default Dashboard;