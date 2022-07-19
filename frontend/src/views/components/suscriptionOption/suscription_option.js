import { Component } from "react";
import { Link } from "react-router-dom";
import './suscription_option.css';

class SuscriptionOption extends Component {

    render() {
        return(
            <Link onClick={() => this.props.onSuscribe(this.props.value)} className="suscription-option" to="/">
                <h1>{`${this.props.value} ${this.props.value == 1 ? 'minuto' : 'minutos'}`}</h1>
            </Link>
        );
    }

}

export default SuscriptionOption;
