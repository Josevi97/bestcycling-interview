import { Component } from "react";
import { Link } from "react-router-dom";
import './class_preview.css';

class ClassPreview extends Component {
    render() {
        return(
            <Link className="class-preview-content" to="/player">
                <div className="class-preview-header">
                    <span>LOGO</span>
                    <p>12 Ene 2018</p>
                </div>
                <div className="class-preview-body">
                    <h3>BC13/Las tres montañas</h3>
                    <span>Lorena Isasi</span>
                </div>
            </Link>
        );
    }
}

export default ClassPreview;
