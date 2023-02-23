
const initialState = {
    allPokemon: [],
    pokeFilter: [],
    pokeDetail: {},
    pokeTypes: [],
    error: false,
  };


const rootReducer = (state = initialState , action) => {
    const allPokemon = state.allPokemon;
    const pokemon = state.pokeFilter;
    switch(action.type){
        
        case "GET_POKEMON" : 

        return {
            ...state,
            allPokemon: action.payload,
            pokeFilter: action.payload,
        }
        case "FILTER_BY_TYPE":
            
        default:
            return {...state};
    }
}