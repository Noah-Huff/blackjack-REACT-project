import React from 'react'
import { Button } from 'react-bootstrap'

const PlayerButtons = ( {ran} ) => {
    return (
        <div className="">
            <Button className="btn-hit player-btn"
            onClick={'this'}
            >Hit</Button>
            <Button className="btn-stand player-btn">Stand</Button>
            <Button className ="btn-deal player-btn">Deal</Button>
        </div>
    )
}

export default PlayerButtons
