import { Component } from "react";
import { Link } from "react-router-dom";
import { getTimeDiff } from "../../../helpers/date";
import './navbar.css';

class Navbar extends Component {

    state = {
        session: undefined,
        currentCount: 0,
        countdown: () => {}
    }

    componentDidMount() {
        let session = localStorage.getItem('session');

        if (session) {
            session = JSON.parse(session);
            const diff_time = getTimeDiff(session.expires);

            this.setState({
                session: session,
                currentCount: diff_time,
                countdown: setInterval(() => {
                    const diff = getTimeDiff(this.state.session?.expires);

                    if (diff >= 0) {
                        this.setState({
                            currentCount: diff
                        });
                    }
                    else clearInterval(this.state.countdown);

                }, 1000)
            });

        }
    }

    componentWillUnmount() {
        clearInterval(this.state.countdown);
    }

    hasExpired = () => getTimeDiff(this.state.session?.expires) <= 0;

    shouldRenderButton = () => {
        if (!this.state.session) return;

        return this.hasExpired();
    }

    shouldRenderCountdown = () => {
        if (!this.state.session) return;

        return !this.hasExpired() && this.state.currentCount !== 0;
    }

    render() {
        return (
            <nav className="main-navbar">
                <div className="wrap navbar-content">
                    <Link to="/">
                        <img width="200" src="bestcycling.png" />
                    </Link>
                    {
                        this.shouldRenderButton() && (<Link className="button-basic" to="/suscription">SUSCRIBETE</Link>)
                    }
                    {
                        this.shouldRenderCountdown() && (
                            <div className="color-secondary navbar-countdown">SUSCRIPCION <h4 className="color-primary">{this.state.currentCount}</h4></div>
                        )
                    }
                </div>
            </nav>
        );
    }

}

export default Navbar;
