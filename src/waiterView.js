import React, {Component} from 'react';
import { connect} from 'react-redux';
import './index.css';
import axios from 'axios';
import OrderModal from './orderModal';

import {fetchAllOrders} from './actions/fetchAllOrders';
import openSocket from 'socket.io-client';

const socket = openSocket('http://127.0.0.1:4000');










class WaiterView extends React.Component {
  constructor(){
    super();

  
   
    }
componentDidMount(){

  console.log(this.props.match.params.key);
 localStorage.setItem('token',this.props.match.params.key) 
this.props.fetchAllOrders();
this.props.loggedIn();

socket.on('orderReceived', () =>{

  this.props.fetchAllOrders();
});

}


openModal = (item)=>{
 this.props.openModal(item);

}


  render(){

    let ordersListCompleted = this.props.orders.map((item, index) =>{
                         if(item.completed){
                       return   <li className="latestOrders" onClick={() => this.openModal(item)} key={index}>{item.time}<span  ></span><span className=""> {item._id} </span></li>

                         }       
          });
    let ordersListPending = this.props.orders.map((item, index) =>{
            if(!item.completed){
          return   <li className="latestOrders" onClick={() => this.openModal(item)} key={index}>{item.time}<span  ></span><span className=""> {item._id} </span></li>

            }       
});

   
    return (
    <div className="checkOutMain">
      <h2 className="ordersTitle">Pending orders</h2>
    <ul>
        {ordersListPending}

    </ul>
    <h2 className="ordersTitle">Competed orders</h2>
    <ul>
        {ordersListCompleted}

    </ul>

    <OrderModal></OrderModal>
    </div>
  );
    }
}

const mapStateToProps = (state) =>{

    return{
       
        
      orders:state.orders
  
  
      
    }
  
  }
const mapDispatchToProps = (dispatch) =>{

  return{
        
       
    fetchAllOrders: () =>{dispatch(fetchAllOrders())},
    loggedIn:()=>{dispatch({type:'USER_LOGGED_IN'})},
    openModal: (itemToAdd) =>{dispatch({type: 'OPEN_MODAL', item:itemToAdd})},

    


      

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(WaiterView);
