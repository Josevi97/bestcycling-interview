import { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

class Navbar extends Component {

    render() {
        return(
            <nav className="main-navbar">
                <div className="wrap">
                    <Link to="/"><span className="main-navbar__logo">LOGO</span></Link>
                </div>
            </nav>
        );
    }

}

export default Navbar;
