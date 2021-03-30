import React from 'react'
import { Card, Image, Row } from 'react-bootstrap';

const Player = ( { name, card, score } ) => {
    //let score = 0;
    //card.map( c => parseInt(score += c.value));
    //console.log("SCORE ", score)

    console.log(name, card)
    return (
        <div className="player">
            <h1>{name}</h1>
            { score > 0 && <h3>Score: {score}</h3>}
            <Row className="card-area">
                { card.map(c => ( c.value > 0 ? <Image key={c.index} className="card" src={c.img}></Image> : console.log("Blank Card")) )}
            </Row>
        </div>
    )
}

export default Player

{/* <Image className="card" src={card.img}></Image> */}

