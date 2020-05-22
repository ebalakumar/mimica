import React from 'react';
import './Player.css';

function Player(props) {
    return (
        <div className="player">
            <p>{props.name}</p>
            <p>Points: {props.points}</p>
        </div>
    );
}

export default Player;