import { Component } from "react";
import './video_preview.css';
import { formatDate } from '../../../helpers/date';
import { Link } from "react-router-dom";

class VideoPreview extends Component {

    state = {
        checked: false,
        level: [],
        colors: ['yellow', 'red', 'green', 'blue'],
        color: 'yellow'
    }

    componentDidMount() {
        this.setState({
            level: new Array(3).fill(0).map((element, index) => index < this.props.clazz.level ? 1 : 0),
            color: this.generateColor()
        });
    }

    classNames = () => `video-preview-cat background-color-${this.state.color}`;

    generateColor = () => this.state.colors[Math.floor(Math.random() * this.state.colors.length)];

    alreadyViewed() {
        const data = localStorage.getItem('classes');

        return data && data.includes(this.props.clazz.id);
    }

    onCheckboxClick(e) {
        e.stopPropagation();

        const checked = !this.state.checked;

        this.setState({ checked: checked });
        this.props.onCheckbox(this.props.clazz.id, checked);
    }

    checkboxClassNames = () => `video-preview-image-checkbox ${this.state.checked ? 'active' : ''}`;

    render() {
        return (
            <Link className="video-preview-card" to={`/${this.props.clazz.id}`}>
                <div className="video-preview-image">
                    <div className="video-preview-image-data">
                        <div onClick={(e) => this.onCheckboxClick(e)} className={this.checkboxClassNames()}>
                            <span className="material-symbols-outlined">
                                check
                            </span>
                            <input type="checkbox" />
                        </div>
                        <div className="video-preview-image-text">
                            <h3 className="color-primary">{this.props.clazz.name}</h3>
                            <span className="color-secondary-lighter">{this.props.clazz.instructor_id}</span>
                        </div>
                    </div>

                    {this.alreadyViewed() && (<span className="video-preview-image__pill pill">Completada</span>)}

                    <img src={this.props.clazz.image} />
                </div>
                <div className="video-preview-data">
                    <div className="video-preview-level">
                        <span className="color-secondary-lighter">Nivel </span>
                        <ul className="video-preview__level">
                            {
                                this.state.level.map((element, index) => <li key={index} className={`background-${element === 1 ? 'primary' : 'secondary'}`}></li>)
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
