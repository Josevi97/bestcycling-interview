import { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

class Navbar extends Component {

    render() {
        return(
            <nav className="main-navbar">
                <div className="wrap navbar-content">
                    <Link to="/">
                        <img width="200" src="bestcycling.png" />
                    </Link>
                    <Link className="button-basic" to="/suscription">SUSCRIBETE</Link>
                </div>
            </nav>
        );
    }

}

export default Navbar;
