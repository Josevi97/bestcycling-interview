import { Component } from "react";
import './video_preview.css';
import { formatDate } from '../../../helpers/date';
import { Link } from "react-router-dom";

class VideoPreview extends Component {

    state = {
        level: [],
        colors: ['yellow', 'red', 'green', 'blue']
    }

    componentDidMount() {
        this.setState({
            level: new Array(3).fill(0).map((element, index) => index < this.props.clazz.level ? 1 : 0)
        });
    }

    classNames = () => `video-preview-cat background-color-${this.generateColor()}`;

    generateColor = () => this.state.colors[Math.floor(Math.random()*this.state.colors.length)];

    render() {
        return(
            <Link className="video-preview-card" to={`/${this.props.clazz.id}`}>
                <div className="video-preview-image">
                    <div className="video-preview-image-data">
                        <h3 className="color-primary">{this.props.clazz.name}</h3>
                        <span className="color-secondary-lighter">{this.props.clazz.instructor_id}</span>
                    </div>

                    <img src={this.props.clazz.image} />
                </div>
                <div className="video-preview-data">
                    <div className="video-preview-level">
                        <span className="color-secondary-lighter">Nivel </span>
                        <ul className="video-preview__level">
                            {
                                this.state.level.map((element, index) => <li key={index} className={`background-${element === 1 ? 'primary' : 'secondary'}` }></li>)
                            }
                        </ul>
                    </div>
                    <span className="video-preview__date color-secondary-lighter">{formatDate(this.props.clazz.published).split(' ').slice(0, 2).join(' ')}</span>
                    <span className="video-preview__duration color-secondary-lighter">Duracion {this.props.clazz.duration}'</span>
                </div>
                <div className={this.classNames()}></div>
            </Link>
        );
    }

}

export default VideoPreview;
