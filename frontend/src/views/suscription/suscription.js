import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import SuscriptionOption from "../components/suscriptionOption/suscription_option";
import './suscription.css';
import { getSession } from "../../api/session_controller";
import { useNavigate } from "react-router-dom";
import { createSuscription } from "../../api/suscription_controller";

export default function Suscription() {

    const [session, setSession] = useState(undefined);
    const [checked, setChecked] = useState(false);
    const [options] = useState(new Array(3).fill(1).map((value, index) => `${index === 0 ? 1 : 5*index}`));
    const [ready, setReady] = useState(false);

    const navigate = useNavigate();

    const navigateToHome = () => navigate('/');

    const checkboxClassNames = () => `suscription-checkbox ${checked ? 'active' : ''}`;

    const onCheckboxClick = () => setChecked(!checked);

    const onSuscribe = (value) => {
        createSuscription(session.id, {
            mins: value,
            auto_suscribe: checked
        }).then(() => navigateToHome());
    }

    getSession()
        .then(data => {
            if (!data || data.suscription !== 0) {
                navigateToHome();
            }
            else {
                setSession(data);
                setReady(true);
            }
        })
        .catch(() => navigateToHome());

    return !ready ? null : (
        <div>
            <Navbar />

            <div className="wrap suscription-content">
                <div className="suscription-header">
                    <h1 className="color-primary">SUSCRIBETE</h1>

                    <div className="suscription-auto">
                        <div onClick={() => onCheckboxClick()} className={checkboxClassNames()}>
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
                        options.map((element, index) => <SuscriptionOption key={index} value={element} onSuscribe={onSuscribe.bind(this)} />)
                    }
                </div>
            </div>
        </div>
    )

}
