export const openMenu = () =>{

    return{
        type: 'OPEN_CURTAIN_MENU',
        
    }
}

export const closeMenu = () =>{

    return{
        type: 'CLOSE_CURTAIN_MENU',
        
    }
}

export const addToCartItemSum = () =>{

    return{
        type: 'ADD_TO_CART_ITEM_SUM',
        
    }
}

export const emptyCart = () =>{

    return{
        type: 'EMPTY_CART',
        
    }
}

export const loggedIn = () =>{

    return{
        type: 'USER_LOGGED_IN',
        
    }
}

export const loggedOut = () =>{

    return{
        type: 'USER_LOGGED_OUT',
        
    }
}

export const openModal = (payload) =>{

    return{
        type: 'OPEN_MODAL',
        payload
        
    }
}

export const closeModal = () =>{

    return{
        type: 'CLOSE_MODAL',
        
    }
}


export const addItemObjectToBasket = (payload) =>{

    return{
        type: 'ADD_ITEM_TO_BASKET',
        payload
    }
}