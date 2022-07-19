import { Component } from "react";
import Navbar from "../components/navbar/navbar";
import './list.css';
import { getData, findClasses } from "../../api/test_controller";
import VideoPreview from "../components/VideoPreview/video_preview";

class List extends Component {

    state = {
        classes: []
    }

    componentDidMount() {
        getData()
            .then(data => {
                this.setState({
                    classes: findClasses(data)
            });
        });
    }

    render() {
        return(
            <div>
                <Navbar />

                <div className="wrap list-content">
                    <div className="list-body">
                        {
                            this.state.classes.map(clazz => <VideoPreview key={clazz.id} clazz={clazz} />)
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default List;
