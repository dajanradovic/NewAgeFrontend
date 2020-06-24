const initState={

    alcoholicDrinks: [],
    nonAlcoholicDrinks: [],
    beer: [],
    snacks: [],
    openMenu: false,
    cartItemSum:0,
    activeOrder:[],
    activeOrderTotal:0,
    orders:[],
    openModal:false,
    modalOrder:{},
    loggedIn:false
}


const rootReducer = (state = initState, action) =>{

  if (action.type === 'SET_ORDERS_FROM_DB'){
          
    return{
         ...state,
         orders:[...action.orders]

    } 
 }

    if (action.type === 'SET_ALCOHOLIC_DRINKS'){
          
      return{
           ...state,
           alcoholicDrinks:[...action.alcoholicDrinks]

      } 
   }

   if (action.type === 'SET_NONALCOHOLIC_DRINKS'){
          
    return{
         ...state,
         nonAlcoholicDrinks:[...action.nonAlcoholicDrinks]

    } 
 }

 if (action.type === 'SET_BEER'){
          
  return{
       ...state,
       beer:[...action.beer]

  } 
}

if (action.type === 'SET_SNACKS'){
          
  return{
       ...state,
       snacks:[...action.snacks]

  } 
}

if (action.type === 'ADD_ITEM_TO_BASKET'){


          
  return{
       ...state,
       activeOrder:[...state.activeOrder,action.item],
       activeOrderTotal: state.activeOrderTotal+action.item.price

  } 
}

if (action.type === 'EMPTY_CART'){
          
  return{
       ...state,
       activeOrder:[],
       cartItemSum:0,
       activeOrderTotal:0

  } 
}

   if (action.type === 'OPEN_CURTAIN_MENU'){

    
      
  return{
    ...state,
    openMenu: true

  } 
}

if (action.type === 'OPEN_MODAL'){

    
      
  return{
    ...state,
    modalOrder: action.item,
    openModal: true

  } 
}

if (action.type === 'CLOSE_MODAL'){

    
      
  return{
    ...state,
    openModal: false

  } 
}

if (action.type === 'USER_LOGGED_IN'){

    
      
  return{
    ...state,
    loggedIn: true

  } 
}

if (action.type === 'USER_LOGGED_OUT'){

    
      
  return{
    ...state,
    loggedIn: false

  } 
}

if (action.type === 'CLOSE_CURTAIN_MENU'){

  
    
return{
  ...state,
  openMenu: false

} 
}

if (action.type === 'ADD_TO_CART_ITEM_SUM'){

  
    
  return{
    ...state,
    cartItemSum: state.cartItemSum+1
  
  } 
  }



return state;

}

export default rootReducer;