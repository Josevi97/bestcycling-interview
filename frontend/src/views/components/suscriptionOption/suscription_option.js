import { Component } from "react";
import { Link } from "react-router-dom";
import './suscription_option.css';

class SuscriptionOption extends Component {

    render() {
        return(
            <div onClick={() => this.props.onSuscribe(this.props.value)} className="suscription-option">
                <h1>{`${this.props.value} ${this.props.value == 1 ? 'minuto' : 'minutos'}`}</h1>
            </div>
        );
    }

}

export default SuscriptionOption;
