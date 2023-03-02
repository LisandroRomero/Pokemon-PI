import React from "react";
import "./LandingPage.css"
import {Link} from "react-router-dom"




const LandingPage = () => {
    return (
        <div className="LandingPage">
          

            <div className="tittle" >
                <img src="https://fontmeme.com/permalink/230221/dc42b73c9482c44a56c46293c38b08eb.png" alt="welcome to my pokemon's application" />
            </div>
            <Link to = "/home">
                <button className="buttonImage" ><img src="https://fontmeme.com/permalink/230221/5421cc0bd4301165f3247838ceb71ee9.png" alt="" /></button>
            </Link>

            <img src="https://fontmeme.com/permalink/230302/c7cbcd67def5c92fb7afefcff79ab4de.png" alt="Created by Lisandro Romero" className="createdBy" />

          
        </div>

    )
}

export default LandingPage;