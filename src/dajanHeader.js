import React, {Component} from 'react';
import { connect} from 'react-redux';
import './index.css';
import axios from 'axios';
import logo from './logo.svg';




class DajanHeader extends React.Component {
  constructor(props){
    super(props);
   
    }

goToGoogleAuth = ()=>{


  window.open("http://newagebackend.xyz/auth/google","_self");

}

logOut = ()=>{
  axios.get('http://newagebackend.xyz/auth/logout', {
    headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}
  
}).then(response =>{
      localStorage.removeItem('token');
      this.props.loggedOut();

       window.open("http://newage.apartments-radovic.website","_self");
})
.catch(error => {
  console.log(error);

});
    
}

  render(){

  
    return (
    <div >
     <header>
       
       
       <div className="logo"></div>
       <div className="titleName">NewAge Snack-Bar</div>
       {!this.props.loggedIn ? <button onClick={this.goToGoogleAuth} className="googleSignIn">Sign-in with Google</button> : <button onClick={this.logOut} className="googleSignIn">LogOut</button>}



       
       </header>
    </div>
  );
    }
}

const mapStateToProps = (state) =>{

  return{
     
      
    loggedIn:state.loggedIn


    
  }

}

const mapDispatchToProps = (dispatch) =>{

  return{
        
    loggedOut:()=>{dispatch({type:'USER_LOGGED_OUT'})},

      

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DajanHeader);
