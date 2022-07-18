import { Component } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import './player.css'

function Player() {

    const { id } = useParams();

    return (
        <div>
            <Navbar />

            <div className="wrap player-content">
                <div className="player-header">
                    <div className="player-header__button">
                        <span className="material-symbols-outlined">
                            chevron_left
                        </span>
                    </div>
                    <div className="player-details">
                        <h1>BC40/Está en ti</h1>
                        <span>Julio J.</span>
                    </div>
                </div>
                <div className="player-video">
                    <h1>5</h1>
                </div>
            </div>
        </div>
    );
}

export default Player;
