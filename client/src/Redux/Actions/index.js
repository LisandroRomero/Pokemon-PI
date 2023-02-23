import  axios  from "axios";




export const getPokemon = () => {
    return async function (dispatch) {
      try {
        const pokemon = await axios.get("http://localhost:3001/pokemons");
        return dispatch({
          type: "GET_POKEMON",
          payload: pokemon.data,
        });
      } catch (e) {
        console.log("error al traer todos los pokemons");
      }
    };
  };

  export function getTypes () {
    return {
      type : "GET_TYPES"
    }
  }

  export function  getPokemonDetail (id) {
    try {
    
      return async function (dispatch) {
        const pokemonDetail = await axios.get(`http://localhost:3001/pokemons/${id}`)
        
        return dispatch({
          type: "GET_POKEBYID",
          payload: pokemonDetail.data
        })
      }
    }catch (error){
      console.log("this pokemon does not exist")
    }
    }

    export const getByName = (name) =>{
      try {
        return async function (dispatch) {
          const getDetails = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
          return dispatch({
              type : "GET_BYNAME",
          payload : getDetails.data
        })
      }
      }catch (error) {return {error : error.mesage } }
      }
    

    export const createPk =  (pokemon) => {
      try {
          return async function(dispatch) {
            let payload = await axios.post('http://localhost:3001/pokemons', pokemon)
            
              return dispatch({
                type : "POKE_POST",
                payload
              })
          }
      } catch (error) {
        return {error : error.mesage }
      }
  };



  