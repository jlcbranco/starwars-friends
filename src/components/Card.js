import React from "react";


export default function Card({ imgPath, name, email }) {

        return (

            <div className="card grow">  
                <div className="card--img">
                    <img src={ `../images/${imgPath}` } alt="Star Wars"  />
                </div>
                <div className="card--info">
                    <h3>{ name }</h3>
                    <p>{ email }</p>
                </div>
            </div>          

        )

}