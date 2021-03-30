import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Player from '../components/Player';
import PlayerButtons from '../components/PlayerButtons';
import Score from '../components/Score';
import Deck from '../deck';

const Blackjack = () => {
    let [you, setYou] = useState("You");
    let [comp, setComp] = useState("Dealer");
    let [card, setCard] = useState([{ _id: '0', card: '0', value: 0, img: '-', index: -1 }]);
    let [pCard, setPCard] = useState([{ _id: '0', card: '0', value: 0, img: '-', index: 'none' }]);
    let [dCard, setDCard] = useState([{ _id: '0', card: '0', value: 0, img: '-' }]);

    function ranNumber() {
        let number = Math.floor(Math.random() * 5 );
        return number;
    }

    function playerCard() {
        pCard[0].index = 101;
        //setting the index for the map function in the Player.js component
        pCard[parseInt(pCard.length-1)].index = parseInt(pCard.length-1);
        console.log("P-Card #1: ", pCard);
        setPCard((prevState) => [...prevState, Deck[ranNumber()] ] );
        console.log("P-Card: ", pCard);

    }

    function dealerPlay() {

    }

    function addScore(adding) {
        let score = 0;
        adding.map( c => parseInt(score += c.value));
        return score;
    }

    function randomCard() {
        console.log("RAN CARD CALLED");
        console.log("DECK", Deck[51]);
        Deck[0].index = Deck.length;
        setCard((prevState) => [...prevState, Deck[51]]);
        console.log("CARD HERE ", card);
    }

    return (
        <Container className="game-container text-center">
            <div className="title">
                <h1 className="">Let's Play A Game Of Blackjack!</h1>
                <p className="">
                    Blackjack is a simple game. You are playing against the dealer, in this case the computer,
                    to see who can get the closest to 21.
                </p>
            </div>
            <Container fluid className="player-container">
                <Row>
                    <Col>
                        <Player name={you} card={pCard} score={addScore(pCard)} />
                    </Col>
                    <Col>
                        <Player name={comp} card={dCard} score={0}/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className="">
                        <Button className="btn-hit player-btn" onClick={playerCard}
                        >Hit</Button>
                        <Button className="btn-stand player-btn" onClick={dealerPlay}>Stand</Button>
                        <Button className="btn-deal player-btn">Deal</Button>
                    </div>
                </Row>
                <Row>
                    <Score />
                </Row>
            </Container>


        </Container>
    )
}

export default Blackjack
