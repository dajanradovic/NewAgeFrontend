import axios from 'axios';


export const fetchAllOrders = (token) =>{
    return (dispatch) => {
        console.log(localStorage.getItem('token'));
        axios.get('http://newagebackend.xyz/api/getAllOrders',{
                headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}


        })
            .then(response => {

                  console.log(response.data);
                   dispatch({
                    type: 'SET_ORDERS_FROM_DB',
                    orders: response.data
                })
              
            })
            
            .catch(error => {
                console.log(error);
             
            });

        
    }

}