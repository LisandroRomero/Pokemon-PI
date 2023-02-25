import React from 'react';
import {Link} from "react-router-dom"
import {getPokemonDetail} from "../../Redux/Actions"

function Detail(props) {
    return (
        <div>
            <h1>Detail</h1>
            <Link to={"/home"}>
                <button>Back to home</button>
            </Link> 
        </div>
    );
}

export default Detail;