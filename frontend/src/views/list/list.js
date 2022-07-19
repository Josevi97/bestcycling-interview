import { Component } from "react";
import Navbar from "../components/navbar/navbar";
import './list.css';
import { getData, findClasses } from "../../api/test_controller";
import VideoPreview from "../components/VideoPreview/video_preview";
import { Link } from "react-router-dom";

class List extends Component {

    state = {
        classes: [],
        data: []
    }

    componentDidMount() {
        getData()
            .then(data => {
                this.setState({
                    classes: findClasses(data)
                });
            });
    }

    modifyData(id, add) {
        const data = this.state.data;

        if (add) {
            data.push(id);

            this.setState({ data: data });
        }
        else this.setState({ data: data.filter(value => value !== id) });
    }

    classNames = () => `list-play-all ${this.state.data.length > 0 ? '' : 'disabled'}`;

    render() {
        return (
            <div>
                <Navbar />

                <div className="wrap list-content">
                    <div className="list-header">
                        <Link className={this.classNames()} to={`/${this.state.data.join('_')}`}>
                            <span className="material-symbols-outlined">
                                play_arrow
                            </span>
                            REPRODUCIR AUTOMATICAMENTE
                        </Link>
                    </div>

                    <div className="list-body">
                        {
                            this.state.classes.map(clazz => <VideoPreview key={clazz.id} clazz={clazz} onCheckbox={this.modifyData.bind(this)} />)
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default List;
