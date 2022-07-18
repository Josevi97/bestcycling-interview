import { Component } from "react";
import Navbar from "../components/navbar/navbar";
import './player.css'

class Player extends Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="wrap player-content">
                    <div className="player-header">
                        <div className="player-header__button">
                            <span class="material-symbols-outlined">
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

}

export default Player;
