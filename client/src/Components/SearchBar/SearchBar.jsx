import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import {allPokemons,clearHome,getByName} from "../../Redux/Actions/index"


function SearchBar(props) {
    const dispatch = useDispatch()

    const [input , setInput] = useState("")
    const pokemons = useSelector((state) => state.allPokemons)
    

    let handlerChange = (e) => {
        setInput(e.target.value);
    } 
   
    let handleSubmit = (e) => {
        dispatch(clearHome())
        e.preventDefault();
        let disAndSet = (input) => { dispatch(getByName(input))
            setInput('');
        }
        let pkFind = pokemons.filter(pk => pk.name === input);
        pkFind.length > 0 ?  disAndSet(input) : alert("no ")
        
        
      
    }

    return (
        <div>
         <form onSubmit={handleSubmit}>
          <input
          
          onChange={handlerChange}
          type="text" 
          value={ input }
          placeholder="Search pokemon..."
          onClick={()=>  setInput('')}
          /> 
         <button type="submit"> Search! </button>    
    </form>
        </div>
    );
}

export default SearchBar;