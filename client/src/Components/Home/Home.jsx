import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer" 
import "./home.css"
import { Link } from "react-router-dom";


const Home = ()=>{
    return(
    <div className="home">
        <h1>Este el home 👧 </h1>
        <img src="https://fontmeme.com/permalink/230228/f174f511c1a8e2296e543203a6cc2aca.png" alt="Welcome to my home" />
        <Link to={"/create"}> <button>CREAR POKEMON</button></Link>
        <CardsContainer/>
    </div>
 )
}




export default Home