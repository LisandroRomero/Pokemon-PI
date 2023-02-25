import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch  } from 'react-redux';


function SearchBar(props) {
    const dispatch = useDispatch()

    const [input , setInput] = useState("")
    const allThePoke = useSelector((state) => state.pokemons)
    

    let handlerChange = (e) => {
        setInput(e.target.value);
    } 


    return (
        <div>
         <form >
          <input
          
          onChange={handlerChange}
          type="text" 
          value={ input }
          placeholder="Pokemon name..."
          onClick={()=>  setInput('')}
          /> 
         <button type="submit"> Search! </button>
          <label> 🔎 </label>
       
       
       
        
    </form>
        </div>
    );
}

export default SearchBar;