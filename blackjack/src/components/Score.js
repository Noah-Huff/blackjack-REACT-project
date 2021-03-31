import React from 'react'

const Score = ({ win, loss, draw }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Wins</th>
                    <th>Draws</th>
                    <th>Losses</th>
                </tr>
                <tr>
                    <td>{win}</td>
                    <td>{draw}</td>
                    <td>{loss}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Score
