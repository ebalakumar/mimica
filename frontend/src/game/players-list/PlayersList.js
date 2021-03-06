import React from 'react';
import Player from './player/Player';

import './PlayersList.css';

function PlayersList(props) {
    const players = [
        {
            name: props.playerName,
            points: 100,
            position: 1
        },
        {
            name: 'Player 2',
            points: 80,
            position: 2
        },
        {
            name: 'Player 3',
            points: 50,
            position: 3
        },
        {
            name: 'Player 4',
            points: 30,
            position: 4
        },
        {
            name: 'Player 3',
            points: 10,
            position: 5
        }
    ];

    const fillList = () => {
        return players.map(player => {
            return (
                <tr className="individual-player">
                    <td>#{player.position}</td>
                    <td><Player name={player.name} points={player.points} /></td>
                </tr>
            )
        });
    }

    return (
        <table className="players">
            <tbody>
                {fillList()}
            </tbody>
        </table>
    );
}

export default PlayersList;