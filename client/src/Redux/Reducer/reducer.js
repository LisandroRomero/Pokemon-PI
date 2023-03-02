const initialState = {
  allPokemons: [],
  pokemons: [],
  pokeFilter: [],
  pokeDetail: {},
  pokeTypes: [],
  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMON":
      return {
        ...state,
        allPokemons: action.payload,
        pokemons: action.payload,
      };

    case "GET_POKEMON_DETAIL":
      return {
        ...state,
        pokeDetail: action.payload,
      };
    case "CLEAR_DETAIL":
      return {
        ...state,
        pokeDetail: {},
      };
    case "GET_TYPES":
      return {
        ...state,
        pokeTypes: action.payload,
      };

    case "GET_BY_NAME":
      return {
        ...state,
        pokemons: action.payload,
      };
    
    case "FILTER_BY_TYPE":
      if(action.payload === "all") {return {...state, pokemons:state.allPokemons}}
          
      const typeSelected = state.allPokemons?.filter((el) => {
          if(!el.createdInDb){
              if(el.types[0] === action.payload || el.types[1] == action.payload){

               return true 
              }
              else return false 
          } 
          else {
              const acum = el.pokeTypes?.filter((t) => t.name === action.payload)
                  if(acum.length >0){
                  return true 
                  }
                  else {
                  return false 
                  }
              }       
          })
      
      const results = typeSelected.filter((pk) => state.allPokemons.includes(pk))
      
      return {
            ...state,
            pokemons: results,
            
      }

    case "ORDER_BY_NAME":
      if (action.payload === "asc") {
        let poke = state.pokemons?.slice();
        let ords = poke.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });

        if (state.pokeFilter.length > 0) {
          return { ...state, pokeFilter: ords };
        }
        return {
          ...state,
          pokemons: ords,
        };
      }

      if (action.payload === "des") {
        let poke = state.pokemons?.slice();
        let ords = poke.sort(function (a, b) {
          if (b.name > a.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        });

        if (state.pokeFilter.length > 0) {
          return { ...state, pokeFilter: ords };
        }
        return {
          ...state,
          pokemons: ords,
        };
      }

    case "ORDER_BY_ATTACK":
      if (action.payload === "asc") {
        let poke = state.pokemons?.slice();
        let ords = poke.sort(function (a, b) {
          if (a.attack > b.attack) {
            return 1;
          }
          if (b.attack > a.attack) {
            return -1;
          }
          return 0;
        });

        if (state.pokeFilter.length > 0) {
          return { ...state, pokeFilter: ords };
        }
        return {
          ...state,
          pokemons: ords,
        };
      }

      if (action.payload === "des") {
        let poke = state.pokemons?.slice();
        let ords = poke.sort(function (a, b) {
          if (b.attack > a.attack) {
            return 1;
          }
          if (a.attack > b.attack) {
            return -1;
          }
          return 0;
        });

        if (state.pokeFilter.length > 0) {
          return { ...state, pokeFilter: ords };
        }
        return {
          ...state,
          pokemons: ords,
        };
      }
    case "FILTER_BY_CREATE":
      
      if (action.payload === "all")  
      return {
        ...state ,
         pokemons:state.allPokemons
        };


      if (action.payload === "created") {
        const createdPokes = state.allPokemons?.filter((poke) => typeof poke.id === "string");
        // console.log(createdPokes);
        return {
          ...state,
          pokemons: createdPokes,
         
        };
      }
      if (action.payload === "api") {
        const apiPokes = state.allPokemons?.filter((poke) => typeof poke.id === "number");
        return{
            ...state,
            pokemons:apiPokes,
       
        }
      };

    case "CLEAR_HOME":
      return {
        ...state,
        pokemons: state.allPokemons,
        pokeFilters: [],
      };
    case "EMPTY":
      return {
        ...state,
        allPokemons: [],
        pokeFilter: [],
        pokeDetail: {},
        error: false,
      };
      
    default:
      return { ...state };
  }
};

export default rootReducer;
