import React, {Component} from 'react';
import { connect} from 'react-redux';
import './index.css';
import {withRouter} from 'react-router-dom';

import logo from './logo.svg';



class SmallOrderList extends React.Component {
  constructor(props){
    super(props);
   
    }

emptyCart = () =>{

    this.props.emptyCart();
}

goToCheckOut = ()=>{
this.props.closeMenu();
this.props.history.push('/checkout');
   
}
    
    
    

  render(){

    let orderFinalPrice=0;
    let order = this.props.activeOrder.map(item =>{
           orderFinalPrice+=item.price;
       return  <p className="orderListItem" key={item.id}>{item.name}<span>{item.price} kn</span></p>
    });
    return (
    <div className="curtainMenuOrderList">
{order}

        <p className="total">TOTAL: <span>{orderFinalPrice} kn</span></p>
        <button className="goToCheckOutButton" onClick={this.goToCheckOut}>Go to checkout</button>
        <button className="eraseAllFromActiveOrderButton" onClick={this.emptyCart}>Erase all from cart</button>

     
    </div>
  );
    }
}

const mapStateToProps = (state) =>{

    return{
        activeOrder: state.activeOrder
        
  
  
  
      
    }
  }

const mapDispatchToProps = (dispatch) =>{

  return{
        
   
    emptyCart:()=>{dispatch({type: 'EMPTY_CART'})},
    closeMenu:()=>{dispatch({type: 'CLOSE_CURTAIN_MENU'})},



  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SmallOrderList));
