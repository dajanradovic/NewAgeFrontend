import React, {Component} from 'react';
import { connect} from 'react-redux';
import './index.css';
import SmallOrderList from './smallOrderList';
import {fetchAlcoholicDrinks} from './actions/fetchAlcoholicDrinks';
import {fetchNonAlcoholicDrinks} from './actions/fetchNonAlcoholicDrinks';
import {fetchBeer} from './actions/fetchBeer';
import {fetchSnacks} from './actions/fetchSnacks';

import logo from './logo.svg';



class Menu extends React.Component {
  constructor(){
    super();

    this.state={
        openCurrentOrderListDiv: false

    }
   
    }

    componentDidMount(){
      this.props.fetchAlcoholicDrinks();
      this.props.fetchNonAlcoholicDrinks();
      this.props.fetchBeer();
      this.props.fetchSnacks();



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

closeCurtainMenu = () => {

  this.props.closeMenu();

  
}

addToBasket = (item) =>{

this.props.addToCartItemSum();
this.props.addItemObjectToBasket(item)

}

openCurrentOrderListDiv = () =>{

  this.setState({

    openCurrentOrderListDiv: !this.state.openCurrentOrderListDiv
  })

  
}
    
    

  render(){

    if(this.props.alcoholicDrinks ==undefined)
            return null;
      
            let alcoholicDrinksList = this.props.alcoholicDrinks.map((item, index) =>{

              return <p className="menuItem" key={index}>{item.name}<span className="dots">..............</span><span className="prices"> {item.price} kn</span><button className="addButton" onClick={() => this.addToBasket(item) }>Add</button></p>
            });

            let nonAlcoholicDrinksList = this.props.nonAlcoholicDrinks.map((item, index) =>{

              return <p className="menuItem" key={index}>{item.name}<span className="dots">..............</span><span className="prices"> {item.price} kn</span><button className="addButton" onClick={() => this.addToBasket(item)}>Add</button></p>
            });

            let beerList = this.props.beer.map((item, index) =>{

              return <p className="menuItem" key={index}>{item.name}<span className="dots">..............</span><span className="prices"> {item.price} kn</span><button className="addButton" onClick={() => this.addToBasket(item)}>Add</button></p>
            });

            let snacksList = this.props.snacks.map((item, index) =>{

              return <p className="menuItem" key={index}>{item.name}<span className="dots">..............</span><span className="prices"> {item.price} kn</span><button className="addButton" onClick={() => this.addToBasket(item)}>Add</button></p>
            });
    return (
    <div>

<div id="myNav" className={this.props.openMenu ?   'overlayOpen' : 'overlay'}>
<div className="curtainMenuCart" onClick={this.openCurrentOrderListDiv}></div>
<span className="shoppingCartItemNumber">{this.props.sum}</span>
    {this.state.openCurrentOrderListDiv && <SmallOrderList></SmallOrderList> }

<a className="closebtn" onClick={this.closeCurtainMenu}>&times;</a>




<div className="overlay-content">

<div className="accordion">Non-alcholic drinks</div>
<div className="panel">
{nonAlcoholicDrinksList}
</div>

<div className="accordion">Alcholic drinks</div>
<div className="panel">
  {alcoholicDrinksList}
  
</div>

<div className="accordion">Beer</div>
<div className="panel">
{beerList}
</div>

<div className="accordion">Snacks</div>
<div className="panel">
{snacksList}
</div>
  
</div>





</div>
     
    </div>
  );
    }
}


const mapStateToProps = (state) =>{

  return{
      openMenu: state.openMenu,
      alcoholicDrinks: state.alcoholicDrinks,
      nonAlcoholicDrinks: state.nonAlcoholicDrinks,
      beer: state.beer,
      snacks: state.snacks,
      sum: state.cartItemSum



    
  }
}

const mapDispatchToProps = (dispatch) =>{

  return{
          
    fetchAlcoholicDrinks: () =>{dispatch(fetchAlcoholicDrinks())},
    fetchNonAlcoholicDrinks: () =>{dispatch(fetchNonAlcoholicDrinks())},
    fetchBeer: () =>{dispatch(fetchBeer())},
    fetchSnacks: () =>{dispatch(fetchSnacks())},
    closeMenu:()=>{dispatch({type: 'CLOSE_CURTAIN_MENU'})},
    addToCartItemSum:()=>{dispatch({type: 'ADD_TO_CART_ITEM_SUM'})},
    addItemObjectToBasket: (itemToAdd) =>{dispatch({type: 'ADD_ITEM_TO_BASKET', item:itemToAdd})},


      

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Menu);
