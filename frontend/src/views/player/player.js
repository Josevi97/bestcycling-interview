import { Component } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getOne } from '../../api/test_controller';
import Navbar from '../components/navbar/navbar';
import './player.css'

class Player extends Component {

    state = {
        clazz: {}
    }

    componentDidMount() {
        getOne(this.props.id)
            .then(data => this.setState({clazz: data}));
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="wrap player-content">
                    <div className="player-header">
                        <button onClick={() => this.props.navigate(-1)} className="player-header__button">
                            <span className="material-symbols-outlined">
                                chevron_left
                            </span>
                        </button>
                        <div className="player-details">
                            <h1>{this.state.clazz.name}</h1>
                            <span>{this.state.clazz.instructor_id}</span>
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

export default function PlayerState() {

    const navigate = useNavigate();
    const { id } = useParams();

    return <Player navigate={navigate} id={id} />

};
