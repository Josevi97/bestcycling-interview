import { Component } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getOne } from '../../api/test_controller';
import Navbar from '../components/navbar/navbar';
import './player.css'
import { getSession } from "../../api/session_controller";

class Player extends Component {

    state = {
        clazz: {},
        countValues: new Array(6)
            .fill(0)
            .map((value, index) => index === 0 ? 'FIN' : value + index),
        currentCount: undefined,
        countdown: () => { },
        ids: []
    }

    componentDidMount() {
        this.loadSession(() => {
            const ids = [...new Set(this.props.id.split('_'))];

            this.setState({ ids: ids });
            this.loadData(ids[0]);
        });
    }

    navigateToSuscription() {
        this.props.navigate('/suscription');
    }

    componentWillUnmount() {
        clearInterval(this.state.countdown);
    }

    loadSession(callback) {
        getSession()
            .then(data => {
                if (!data || data.suscription === 0) {
                    this.navigateToSuscription();
                }
                else callback();
            })
            .catch(() => this.navigateToSuscription());

    }

    loadData(id) {
        getOne(id)
            .then(data => {
                this.setState({
                    clazz: data,
                    currentCount: 5,
                    countdown: setInterval(() => {
                        if (this.state.currentCount > 0) {
                            this.setState({ currentCount: this.state.currentCount - 1 });
                        } else {
                            clearInterval(this.state.countdown);

                            const data = localStorage.getItem('classes') ? localStorage.getItem('classes') : [];
                            const array = [data];
                            array.push(this.state.clazz.id);

                            localStorage.setItem('classes', array);

                            const ids = this.state.ids.splice(1);

                            if (ids.length > 0) {
                                this.loadSession(() => {
                                    this.setState({ ids: ids });
                                    this.loadData(ids[0]);
                                })
                            }
                            else this.props.navigate(-1);
                        }
                    }, 1000)
                })
            });
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
                        <h1>{this.state.countValues[this.state.currentCount]}</h1>
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
