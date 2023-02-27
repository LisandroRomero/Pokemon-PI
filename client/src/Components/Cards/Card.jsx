import React from "react"




const Cards = (props)=>{
    // console.log(props);
    return(
        <div>
        <h3>{props.name.toUpperCase()}</h3>
        <img src={props.image} alt={props.name}/>
        <div>{
            props.types.join(" - ").toUpperCase()
            }
            </div>
        </div>
    )
}



export default Cards