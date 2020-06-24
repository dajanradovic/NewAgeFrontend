import React, {Component} from 'react';
import { connect} from 'react-redux';
import './index.css';

import logo from './logo.svg';
import './App.css';
import {fetchAlcoholicDrinks} from './actions/fetchAlcoholicDrinks';
import {fetchNonAlcoholicDrinks} from './actions/fetchNonAlcoholicDrinks';
import {fetchBeer} from './actions/fetchBeer';
import {fetchSnacks} from './actions/fetchSnacks';




import MainContent from './mainContent';
import Menu from './menu';




class HomeView extends React.Component {
  constructor(){
    super();
   
    }


    
    

  render(){
    return (
    <div >
      <Menu />

      <MainContent></MainContent>
    </div>
  );
    }
}



const mapDispatchToProps = (dispatch) =>{

  return{
     



      

  }
}



export default connect(null, mapDispatchToProps)(HomeView);
