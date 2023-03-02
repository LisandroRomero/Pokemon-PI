import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer" 
import "./home.css"
import { Link } from "react-router-dom";


const Home = ()=>{
    return(
    <div className="home">
     
        <Link to={"/create"}> <button>CREAR POKEMON</button></Link>
        <CardsContainer/>
    </div>
 )
}




export default Home