import React, {Component} from 'react';
import { connect} from 'react-redux';
import './index.css';
import axios from 'axios';
import DajanHeader from './dajanHeader';
import {socketListen} from './socketListen';





class Checkout extends React.Component {
  constructor(){
    super();

    this.state={

    email:'',
    orderCompletedNote:false,
    table:'',
    tableError:false
    
    }
   
    }

confirmOrder = () => {
    if(this.state.table==''){

     this.setState({

      tableError:true
     })
    }

    else{
    
  axios.post('http://localhost:4000/api/newOrder', {
    contents: this.props.activeOrder,
    price: this.props.total,
    email:this.state.email,
    table:this.state.table
  })
  .then( response => {

    socketListen();
    this.setState({

      orderCompletedNote:true
    })
  })
  .catch(function (error) {
    console.log(error);
  });
    }
}

pickTable = (e) => {

  this.setState({

    table: e.target.value
  })
}


cancelOrder = () =>{

  this.props.emptyCart();
  this.props.history.push('/');
}

setEmail = (e) =>{

    if(e.target.name == 'email'){

        this.setState({

        email:e.target.value
    })
}
}
    

  render(){

    //let orderFinalPrice=0;
    let order = this.props.activeOrder.map(item =>{
          
       return  <p className="orderListItem" key={item.id}>{item.name}<span>{item.price} kn</span></p>
    });
    return (
    <div className="checkOutMain">
     {!this.state.orderCompletedNote && <div>
        <h3>Order summary:</h3>
        <div className="orderReview">
            {order}

        <p className="total">TOTAL: <span>{this.props.total} kn</span></p>
    </div>

    <h6 className="enterEmailH6">Enter your email address in the field below and you will get your receipt e-mailed to you (optional)</h6>
    <input className="sendInvoiceInput" type="email" name="email" value={this.state.email} onChange={this.setEmail}/>

    <h6 className="enterEmailH6">Pick your table (written on the table itself) (required)</h6>
    <select value={this.state.table} onChange={this.pickTable}name="table" id="table">
    <option value='' >Choose your table</option>
    <option value="Table 1">Table 1</option>
    <option value="Table 2">Table 2</option>
    <option value="Table 3">Table 3</option>
    <option value="Table 4">Table 4</option>
    <option value="Table 5">Table 5</option>
    <option value="Table 6">Table 6</option>
    <option value="Table 7">Table 7</option>
</select>
{this.state.tableError && <p id="tableError">You need to pick a table to confirm the order</p>}

    <button className="confirmOrderButton" onClick={this.confirmOrder}>Confirm order</button>
    <button className="cancelButton" onClick={this.cancelOrder}>Cancel</button>
    </div>
 }
    {this.state.orderCompletedNote && <div><button className="goToMainPageButton" onClick={this.cancelOrder}>Go To The Main Page</button><h2 className="orderCompletedNote">You have completed and order. Water will be brining it to you in a minute! </h2></div>}
    </div>
  );
    }
}

const mapStateToProps = (state) =>{

    return{
        activeOrder: state.activeOrder,
        total:state.activeOrderTotal
        
  
  
  
      
    }
  
  }
const mapDispatchToProps = (dispatch) =>{

  return{
        
       

    emptyCart:()=>{dispatch({type: 'EMPTY_CART'})}


      

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
