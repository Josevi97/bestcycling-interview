import { Component } from "react";
import './class_preview.css';

class ClassPreview extends Component {
    render() {
        return(
            <div className="class-preview-content">
                <div className="class-preview-header">
                    <span>LOGO</span>
                    <p>12 Ene 2018</p>
                </div>
                <div className="class-preview-body">
                    <h3>BC13/Las tres montañas</h3>
                    <span>Lorena Isasi</span>
                </div>
            </div>
        );
    }
}

export default ClassPreview;
