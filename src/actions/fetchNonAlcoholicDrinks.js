import axios from 'axios';


export const fetchNonAlcoholicDrinks = (n) =>{
    return (dispatch) => {

        axios.get('http://localhost:4000/api/nonAlcoholicDrinks')
            .then(response => {

                  console.log(response.data);
                   dispatch({
                    type: 'SET_NONALCOHOLIC_DRINKS',
                    nonAlcoholicDrinks: response.data
                })
              
            })
            
            .catch(error => {
                console.log(error);
             
            });

        
    }

}