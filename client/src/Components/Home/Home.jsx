import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer" 
import "./home.css"
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";

const Home = ()=>{
    return(
    <div className="home">
        <h1>Este el home 👧 </h1>
        <Loading/>
        <SearchBar/>
        <Link to={"/create"}> <button>CREAR POKEMON</button></Link>
        <CardsContainer/>
    </div>
 )
}




export default Home