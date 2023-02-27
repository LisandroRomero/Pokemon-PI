
const initialState = {
    allPokemons: [],
    pokeFilter: [],
    pokeDetail: {},
    pokeTypes: [],
    error: false,
  };


const rootReducer = (state = initialState , action) => {
    
    switch(action.type){
        
        case "GET_POKEMON" : 

        return {
            ...state,
            allPokemons: action.payload          
        }

        case "GET_POKEMON_DETAIL":
            return {
              ...state,
              pokeDetail:action.payload,
            };
        case "CLEAR_DETAIL":
                return {
                  ...state,
                  pokeDetail: {},
                };

        case "GET_POKEMON_BY_NAME":
                const stateName = (action, allPokemon)=>{
                    const pokemonByName = allPokemon.filter(
                        (pokemon) => pokemon.name.toLowerCase().includes(action.payload)
                      );
                      return pokemonByName;
                };
                return {
                  ...state,
                  pokeFilter: stateName,
                  error: !stateName.length ? true : false,
                };

        case "ORDER_BY_NAME" : 
                
               if(action.payload === "asc"){
                let poke = state.allPokemons.slice()
                let ords = poke.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                })
            
                if(state.pokeFilter.length > 0 ) { return {...state , pokeFilter : ords }}
                return {
                    ...state,
                    pokemons : ords
                    
                }   
            }

            if(action.payload === "desc"){
                let poke = state.allPokemons.slice()
                let ords = poke.sort(function (a, b) {
                    if (b.name > a.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })
            
                if(state.pokeFilter.length > 0 ) { return {...state , pokeFilter : ords }}
                return {
                    ...state,
                    pokemons : ords
                    
                }   
            }

        case "ORDER_BY_ATTACK" : 
            if(action.payload === "asc"){
                let poke = state.allPokemons.slice()
                let ords = poke.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return 1;
                    }
                    if (b.attack > a.attack) {
                        return -1;
                    }
                    return 0;
                })
            
                if(state.pokeFilter.length > 0 ) { return {...state , pokeFilter : ords}}
                return {
                    ...state,
                    pokemons : ords
                    
                }   
            }

            if(action.payload === "desc"){
                let poke = state.allPokemons.slice()
                let ords = poke.sort(function (a, b) {
                    if (b.attack > a.attack) {
                        return 1;
                    }
                    if (a.attack > b.attack) {
                        return -1;
                    }
                    return 0;
                })
            
                if(state.pokeFilter.length > 0 ) { return {...state , pokeFilter : ords}}
                return {
                    ...state,
                    pokemons : ords
                   
                }   
            };
            
            case "CLEAR_HOME" : 
            return {
                ...state,
                allPokemons : state.pokePermanent,
                pokeFilters : []
            }
        default:
            return {...state};
    }
}

export default rootReducer