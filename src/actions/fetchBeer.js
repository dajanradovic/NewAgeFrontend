import axios from 'axios';


export const fetchBeer = (n) =>{
    return (dispatch) => {

        axios.get('http://104.248.26.222:4000/api/beer')
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