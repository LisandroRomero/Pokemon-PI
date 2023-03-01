import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getByName } from "../../Redux/Actions/index"


function SearchBar() {
    const dispatch = useDispatch()

    const [input, setInput] = useState("")
    const pokemons = useSelector((state) => state.pokemons)


    let handlerChange = (event) => {
        setInput(event.target.value);
    }

    let handleSubmit = (event) => {

        event.preventDefault();
        dispatch(getByName(input))
        setInput('');

        // let pkFind = pokemons?.filter(pk => pk.name === input);
        // pkFind?.length > 0 ?  disAndSet(input) : alert("no ")



    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input

                    onChange={handlerChange}
                    type="text"
                    value={input}
                    placeholder="Search pokemon..."
                    onClick={() => setInput('')}
                />
                <button type="submit"> Search! </button>
            </form>
        </div>
    );
}

export default SearchBar;