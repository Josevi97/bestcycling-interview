import { Component } from "react";
import Navbar from "../components/navbar/navbar";
import SuscriptionOption from "../components/suscriptionOption/suscription_option";
import './suscription.css';

class Suscription extends Component {

    state = {
        checked: false,
        options: new Array(3).fill(1).map((value, index) => `${index === 0 ? 1 : 5*index}`)
    }

    checkboxClassNames = () => `suscription-checkbox ${this.state.checked ? 'active' : ''}`;

    onCheckboxClick() {
        this.setState({ checked: !this.state.checked });
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
                                <span className="material-symbols-outlined">
                                    check
                                </span>
                                <input id="suscription-checkbox" type="checkbox" />
                            </div>
                            <label for="suscription-checkbox" className="color-secondary">Autorenovar automaticamente</label>
                        </div>
                    </div>
                    <div className="suscription-options">
                        {
                            this.state.options.map(element => <SuscriptionOption value={element} />)
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Suscription;
