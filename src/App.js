import React, {Component} from 'react';
import { connect} from 'react-redux';
import './index.css';

import logo from './logo.svg';
import './App.css';
import HomeView from './homeView';
import {BrowserRouter, Route} from 'react-router-dom';
import Checkout from './checkOut';
import WaiterView from './waiterView';



import DajanHeader from './dajanHeader';
import Menu from './menu';




class App extends React.Component {
  constructor(){
    super();
   
    }


   componentDidMount(){

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
    }
   }
    
    

  render(){
    return (
    <div >
      <Menu />

       <DajanHeader></DajanHeader>
      <BrowserRouter>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/desk/:key' component={WaiterView} />


   
      </BrowserRouter>
    </div>
  );
    }
}



const mapDispatchToProps = (dispatch) =>{

  return{
      



      

  }
}



export default connect(null, mapDispatchToProps)(App);
