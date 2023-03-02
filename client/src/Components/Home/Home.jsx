import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer" 
import "./home.css"
import { Link } from "react-router-dom";
import Filter from "../Filter/filter";


const Home = ()=>{
    return(
    <div className="home">
        <CardsContainer/>
    </div>
 )
}




export default Home