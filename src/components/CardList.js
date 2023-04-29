import React from "react";
import Card from "./Card";


export default function CardList({ characters, emails }) {

    const cardList = characters.map(
        (character, i) => {
            return (
                <Card 
                    key = { character.id }                    
                    //imgPath = { character.imgPath }
                    //name = { character.name }
                    { ...character }
                    email = { emails[i].email}
                />
            )
        }
    )

    return (
        <section className="card--container">
            { cardList }
        </section>
    )

}