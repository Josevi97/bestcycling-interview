import { Component } from "react";
import { Link } from "react-router-dom";
import { getTimeDiff } from "../../../helpers/date";
import './navbar.css';
import { getSession } from "../../../api/session_controller";

class Navbar extends Component {

    state = {
        session: undefined,
        currentCount: 0,
        countdown: () => {}
    }

    componentDidMount() {
        getSession()
            .then(data => {
                if (data) {
                    const diff_time = getTimeDiff(data.expires);
                    const set_interval = data?.expires != 0;
                    const interval = () => {
                        const diff = getTimeDiff(data?.expires);
                        this.setState({ currentCount: diff });

                        console.log(diff);

                        if (diff < 1) {
                            clearInterval(this.state.countdown)
                        }
                    }

                    this.setState({
                        session: data,
                        currentCount: diff_time,
                        countdown: set_interval ? setInterval(interval, 1000) : () => {}
                    });
                }
            });
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
