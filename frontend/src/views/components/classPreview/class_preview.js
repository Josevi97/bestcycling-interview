import { Component } from "react";
import { Link } from "react-router-dom";
import './class_preview.css';
import { formatDate } from '../../../api/test_controller';

class ClassPreview extends Component {

    render() {
        return(
            <Link className="class-preview-content" to={`/${this.props.clazz.id}`}>
                <div className="class-preview-header">
                    <img width="150" src="bestcycling.png" />
                    <p className="color-secondary">{formatDate(this.props.clazz.published)}</p>
                </div>
                <div className="class-preview-body">
                    <h3 className="color-primary">{this.props.clazz.name}</h3>
                    <span className="color-secondary">{this.props.clazz.instructor_id}</span>
                </div>
            </Link>
        );
    }
}

export default ClassPreview;
