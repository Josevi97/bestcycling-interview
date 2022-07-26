import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTimeDiff } from "../../../helpers/date";
import './navbar.css';
import { getSession } from "../../../api/session_controller";

export default function Navbar() {

    const [session, setSession] = useState(undefined);
    const [currentCount, setCurrentCount] = useState(0);

    const get_session = () => {
        getSession()
            .then(data => {
                if (data) {
                    const diff_time = getTimeDiff(data.expires);

                    setSession(data);
                    setCurrentCount(diff_time);
                }
            });
    }

    const hasExpired = () => getTimeDiff(session?.expires) <= 0;

    const shouldRenderButton = () => {
        if (!session) return;

        return hasExpired();
    }

    const shouldRenderCountdown = () => {
        if (!session) return;

        return !hasExpired() && currentCount !== 0;
    }

    useEffect(() => get_session(), []);

    useEffect(() => {
        let interval;

        if (session && session?.expires !== 0) {
            interval = setInterval(() => {
                const diff = getTimeDiff(session?.expires);

                if (diff < 2) {
                    clearInterval(interval)
                    get_session();
                }
                else setCurrentCount(diff);
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [session, currentCount]);

    return (
        <nav className="main-navbar">
            <div className="wrap navbar-content">
                <Link to="/">
                    <img width="200" src="bestcycling.png" />
                </Link>
                {
                    shouldRenderButton() && (<Link className="button-basic" to="/suscription">SUSCRIBETE</Link>)
                }
                {
                    shouldRenderCountdown() && (
                        <div className="color-secondary navbar-countdown">SUSCRIPCION <h4 className="color-primary">{currentCount}</h4></div>
                    )
                }
            </div>
        </nav>
    );

}
