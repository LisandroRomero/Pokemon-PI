import React from "react"
import "./cards.css"



const Cards = (props)=>{
    // console.log(props);
    return(
        <div className="card">
        <h3 className="name">{props.name.toUpperCase()}</h3>
        <img className="img" src={props.image} alt={props.name}/>
        <h4 className="types" >{
            props.types.join(" - ").toUpperCase()
            }
            </h4>
        </div>
    )
}



export default Cards