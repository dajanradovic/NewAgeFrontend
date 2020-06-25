import React, {Component} from 'react';
import { connect} from 'react-redux';
import './index.css';
import axios from 'axios';
import {fetchAllOrders} from './actions/fetchAllOrders';












class OrderModal extends React.Component {
  constructor(){
    super();

  
   
    }
closeModal= () =>{

    this.props.closeModal();
}


completeOrder = () =>{

  const headers={
    'Authorization': 'Bearer '+localStorage.getItem('token')
      
  }
  const body={
      
    order:  this.props.order
    
  }
  
  
  axios.post('http://newagebackend.xyz/api/completeOrder', body, {
    headers: headers
   
}
    
  )
  .then( response => {

    console.log(response);
    this.props.fetchAllOrders();
    this.props.closeModal();

    
  })
  .catch(function (error) {
    console.log(error);
  });
    }



  render(){
    if (this.props.order.contents == undefined)
    return null;

    
  let orderContents = this.props.order.contents.map((item, index) =>{
    return  <p className="orderListItem" key={item.id}>{item.name}<span>{item.price} kn</span></p>

   });
   
    return (
        <div id="myModal" style={{ display: this.props.openModal ? 'block': 'none'}}className="modal">
        <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={this.closeModal}>&times;</span>
          <span className="orderId"><span className="descriptionSpan">Order id:</span>{this.props.order._id}</span>
        </div>
        <div className="modal-body">
        <h3>Order summary:</h3>
        <div className="orderReview">
        {orderContents}

        <p className="total">TOTAL: <span style={{marginRight:"10px"}}>{this.props.order.price} kn</span></p>
    </div>
        </div>
        <div className="modal-footer">
        <span className="orderId"><span className="descriptionSpan">Time:</span> {this.props.order.time}</span>{!this.props.order.completed && <span className="waiterOrderCompleteButton" onClick={this.completeOrder}>Complete</span>}
        </div>
      </div>
      </div>
  
    )
}
}
const mapStateToProps = (state) =>{

    return{
       
        
      openModal:state.openModal,
    order:state.modalOrder
      
    }
  
  }
const mapDispatchToProps = (dispatch) =>{

  return{
        
       
    

    closeModal:()=>{dispatch({type: 'CLOSE_MODAL'})},
    fetchAllOrders: () =>{dispatch(fetchAllOrders())}



      

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(OrderModal);
