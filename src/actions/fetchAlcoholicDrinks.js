import axios from 'axios';


export const fetchAlcoholicDrinks = (n) =>{
    return (dispatch) => {

        axios.get('http://104.248.26.222:4000/api/alcoholicDrinks')
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