import React, {Component} from 'react';
import { connect} from 'react-redux';
import './index.css';

import logo from './logo.svg';



class MainContent extends React.Component {
  constructor(){
    super();
   
    }


    openCurtainMenu = () =>{


        this.props.openMenu();
    }
    
    

  render(){
    return (
    <div className="main">

        Welcome to NewAge Snack-Bar!
       <p> Click on the button to place your order!</p>
       <button id="placeOrder" onClick={this.openCurtainMenu}>Place an order!</button>
     
    </div>
  );
    }
}

const mapDispatchToProps = (dispatch) =>{

  return{
        
    openMenu:()=>{dispatch({type: 'OPEN_CURTAIN_MENU'})}
      

  }
}



export default connect(null, mapDispatchToProps)(MainContent);
