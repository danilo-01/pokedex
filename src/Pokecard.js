import React from "react";
import "./Pokecard.css"

const Pokecard = (props) => {
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div className="pokecard">
            <h3 className="pokecard-name">{props.name}</h3>
            <img className="pokecard-image" src={src}></img>
            <div className="pokecard-details">
                <p className="pokecard-type">Type: {props.type}</p>
                <p className="pokecard-exp">Exp {props.exp}</p>
            </div>
        </div>
    )
}

export default Pokecard;