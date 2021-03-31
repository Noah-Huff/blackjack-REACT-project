import React from 'react'
import { Image, Row } from 'react-bootstrap';

const Player = ({ name, card, score }) => {
    //let score = 0;
    //card.map( c => parseInt(score += c.value));
    //console.log("SCORE ", score)
    console.log(name, card);
    return (
        <div className="player">
            <h1>{name}</h1>
            { (score < 22 ? <h3>Score: {score}</h3> : <h3 className="score-too-high">Score: {score} Is Too High!</h3>)}
            <Row className="card-area">
                { card.map(c => ( c.value > 0 ? <Image key={c.index} className="playing-card" src={c.img}></Image> : console.log("Blank Card")) )}

            </Row>
        </div>
    )
}

export default Player
