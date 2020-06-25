import axios from 'axios';


export const fetchAlcoholicDrinks = (n) =>{
    return (dispatch) => {

        axios.get('http://newagebackend.xyz/api/alcoholicDrinks',{
        headers: {
            'Access-Control-Allow-Origin': '*',
          }})
            .then(response => {

                  console.log(response.data);
                   dispatch({
                    type: 'SET_ALCOHOLIC_DRINKS',
                    alcoholicDrinks: response.data
                })
              
            })
            
            .catch(error => {
                console.log(error);
             
            });

        
    }

}