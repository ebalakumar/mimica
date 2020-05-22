import React from 'react';
import PlayersList from './players-list/PlayersList';
import VideoCamera from './videocam/VideoCamera';
import Chat from './chat/Chat';
import GameBar from './gamebar/GameBar';

import './Game.css';

function Game(props) {
    return (
        <div className="game">
            <GameBar />
            <div className="gameplay">
                <PlayersList playerName={props.location.state.playerName} />
                <VideoCamera />
                <Chat />
            </div>
        </div>
    );
}

export default Game;