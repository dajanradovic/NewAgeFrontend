import axios from 'axios';


export const fetchSnacks = (n) =>{
    return (dispatch) => {

        axios.get('http://localhost:4000/api/snacks')
            .then(response => {

                  console.log(response.data);
                   dispatch({
                    type: 'SET_SNACKS',
                    snacks: response.data
                })
              
            })
            
            .catch(error => {
                console.log(error);
             
            });

        
    }

}