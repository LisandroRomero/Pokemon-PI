




const cards = (props)=>{
    return(
        <div>
        <img src={props.image}/>
        <h3>{props.name}</h3>
        <ul>{props.types.map(type=>{
            return(
                <li>{type}</li>
            )
        })}</ul>
        </div>
    )
}



export default cards