import { Component } from "react";
import { Link } from "react-router-dom";
import './class_preview.css';

class ClassPreview extends Component {

    formatDate = () => {
        const formatter = new Intl.DateTimeFormat('es', { day: "numeric", month: "short", year: "numeric" });
        const time = formatter.format(new Date(this.props.clazz.published));

        return time
            .split(' ')
            .map((word, index) => index === 1 ? `${word[0].toUpperCase()}${word.substring(1)}` : word)
            .join(' ');
    }

    render() {
        return(
            <Link className="class-preview-content" to="/player">
                <div className="class-preview-header">
                    <img width="150" src="bestcycling.png" />
                    <p className="color-secondary">{this.formatDate()}</p>
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
