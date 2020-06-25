import axios from 'axios';


export const fetchBeer = (n) =>{
    return (dispatch) => {

        axios.get('http://newagebackend.xyz/api/beer')
            .then(response => {

                  console.log(response.data);
                   dispatch({
                    type: 'SET_BEER',
                    beer: response.data
                })
              
            })
            
            .catch(error => {
                console.log(error);
             
            });

        
    }

}