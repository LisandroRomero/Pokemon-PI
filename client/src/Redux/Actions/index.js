import  axios  from "axios";




export const getPokemon = () => {
    return async function (dispatch) {
      
        const pokemon = await axios.get("http://localhost:3001/pokemons");
        return dispatch({
          type: "GET_POKEMON",
          payload: pokemon.data,
        });

    };
  };
  
  export function  getPokemonDetail (id) {
    
    
      return async function (dispatch) {
        const pokemonDetail = await axios.get(`http://localhost:3001/pokemons/${id}`)
        
        return dispatch({
          type: "GET_POKEMON_DETAIL",
          payload: pokemonDetail.data
        })
      }
    }

 


    export const getByName = (name) =>{
      
        return async function (dispatch) {
          const getDetails = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
          return dispatch({
              type : "GET_BY_NAME",
          payload : getDetails.data
        })
      }
      
    }
    

    export const createPokemon =  (pokemon) => {
          return async function(dispatch) {
            let payload = await axios.post('http://localhost:3001/pokemons', pokemon)
            
              return dispatch({
                type : "POKE_POST",
                payload
              })
         }
  };

  export const getTypes = () => {
    return async (dispatch) => {
      try {
        const types = await axios.get("http://localhost:3001/types");
        return dispatch({
          type: "GET_TYPES",
          payload: types.data,
        });
      } catch (e) {
        console.log(e);
      }
    };
  };

  export const orderByName = (payload) => {
    return {
      type: "ORDER_BY_NAME",
      payload
    }
  }
  
  export const orderByAttack = (payload) => {
    return {
      type: "ORDER_BY_ATTACK",
      payload
    }
  }

  