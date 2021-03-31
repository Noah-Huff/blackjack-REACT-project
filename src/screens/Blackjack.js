import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Player from '../components/Player';
import Score from '../components/Score';
import Deck from '../deck';

const Blackjack = () => {
    let [you] = useState("You");
    let [comp] = useState("Dealer");
    let [pCard, setPCard] = useState([{ _id: '0', card: '0', value: 0, img: '-' }]);
    let [dCard, setDCard] = useState([{ _id: '0', card: '0', value: 0, img: '-' }]);
    let [win, setWin] = useState(0);
    let [loss, setLoss] = useState(0);
    let [draw, setDraw] = useState(0);

    let ranNumber = () => {
        let number = Math.floor(Math.random() * 52);
        return number;
    }

    let drawCard = (currentIndex) => {
        let thisCard = ranNumber();
        let newCard = {
            img: Deck[thisCard].img,
            value: Deck[thisCard].value,
            card: Deck[thisCard].card,
            _id: Deck[thisCard]._id,
            index: currentIndex,
        }
        console.log("DRAW CARD ", currentIndex);
        return newCard;
    }

    let playerCard = () => {
        if (addScore(pCard) < 22 && dCard.length === 1) {
            setPCard((prevState) => [...prevState, drawCard(pCard.length)]);
            console.log("P-Card: ", pCard);
        }
    }

    // the computer's turn
    let dealerPlay = () => {
        if (pCard.length > 1) {

            let getCard;
            let dealerScore = 0;
            let index = 1;
            let dealerDeck = [{ _id: '0', card: '0', value: 0, img: '-' }];

            while (dealerScore < 15) {
                getCard = drawCard(index);
                if (dealerScore > 14 && getCard.value > 7) {
                    getCard = drawCard(index);
                }
                index += 1;
                dealerDeck = [...dealerDeck, getCard];
                dealerScore += +getCard.value;
                console.log("DEALER DECK ", dealerDeck);
            }
            setDCard(dealerDeck);

            console.log("D-CARD ", dCard);

        }
    }

    let resetPlay = () => {
        declareWinner();
        setPCard([{ _id: '0', card: '0', value: 0, img: '-' }]);
        setDCard([{ _id: '0', card: '0', value: 0, img: '-' }]);
        console.log("P CARD: ", pCard);
        console.log("D CARD: ", dCard);

    }


    let declareWinner = () => {
        if (Math.abs(addScore(pCard) - 21) === Math.abs(addScore(dCard) - 21)) {
            setDraw(parseInt(draw + 1));
        } else if (addScore(pCard) > 21 && addScore(dCard) > 21) {
            setDraw(parseInt(draw + 1));
        } else if (Math.abs(addScore(pCard) - 21) < Math.abs(addScore(dCard) - 21) || addScore(dCard) > 21) {
            if (addScore(pCard) < 22) {
                setWin(parseInt(win + 1));
            } else {
                setLoss(parseInt(loss + 1));
            }
        } else {
            setLoss(parseInt(loss + 1));
        }
    }

    let addScore = (adding) => {
        let score = 0;
        adding.map(c => parseInt(score += c.value));
        return score;
    }

    return (
        <Container className="game-container text-center">
            <Container className="title">
                <h1 className="">Let's Play A Game Of Blackjack!</h1>
                <p className="">
                    Blackjack is a simple game. You play against the dealer, or computer,
                    to see who can get the closest to 21.
                </p>
                <ul className="rules">
                    <li>Click "Hit" until you think you're close enough to 21</li>
                    <li>Click "Stand" to let the dealer play</li>
                    <li>Click "Deal" to reset the game and add record your score</li>
                </ul>
            </Container>
            <Container fluid className="player-container">
                <Row className="player-row">
                    <Col>
                        <Player name={you} card={pCard} score={addScore(pCard)} />
                    </Col>
                    <Col>
                        <Player name={comp} card={dCard} score={addScore(dCard)} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className="">
                        <Button className="btn-hit player-btn" onClick={playerCard}
                        >Hit</Button>
                        <Button className="btn-stand player-btn" onClick={dealerPlay}
                        >Stand</Button>
                        <Button className="btn-deal player-btn" onClick={resetPlay}
                        >Deal</Button>
                    </div>
                </Row>
                <Row>
                    <Score win={win} loss={loss} draw={draw} />
                </Row>
            </Container>


        </Container>
    )
}

export default Blackjack
