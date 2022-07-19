import { Component } from "react";
import Navbar from "../components/navbar/navbar";
import SuscriptionOption from "../components/suscriptionOption/suscription_option";
import './suscription.css';
import { getSession } from "../../api/session_controller";
import { useNavigate } from "react-router-dom";
import { createSuscription } from "../../api/suscription_controller";

class Suscription extends Component {

    state = {
        session: undefined,
        checked: false,
        options: new Array(3).fill(1).map((value, index) => `${index === 0 ? 1 : 5*index}`)
    }

    componentDidMount() {
        getSession()
            .then(data => {
                if (!data || data.suscription !== 0) {
                    this.navigateToHome();
                }
                else this.setState({ session: data });
            })
            .catch(() => this.navigateToHome());

    }

    navigateToHome = () => this.props.navigate('/');

    checkboxClassNames = () => `suscription-checkbox ${this.state.checked ? 'active' : ''}`;

    onCheckboxClick() {
        this.setState({ checked: !this.state.checked });
    }

    onSuscribe(value) {
        createSuscription(this.state.session.id, {
            mins: value,
            auto_suscribe: this.state.checked
        }).then();
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="wrap suscription-content">
                    <div className="suscription-header">
                        <h1 className="color-primary">SUSCRIBETE</h1>

                        <div className="suscription-auto">
                            <div onClick={() => this.onCheckboxClick()} className={this.checkboxClassNames()}>
                                <span className="material-symbols-outlined"u>
                                    check
                                </span>
                                <input id="suscription-checkbox" type="checkbox" />
                            </div>
                            <label htmlFor="suscription-checkbox" className="color-secondary">Autorenovar automaticamente</label>
                        </div>
                    </div>
                    <div className="suscription-options">
                        {
                            this.state.options.map((element, index) => <SuscriptionOption key={index} value={element} onSuscribe={this.onSuscribe.bind(this)} />)
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default function SuscriptionState() {

    const navigate = useNavigate();

    return <Suscription navigate={navigate} />

};
