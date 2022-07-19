import { Component } from "react";
import Navbar from "../components/navbar/navbar";
import './list.css';
import { getData } from "../../api/test_controller";
import VideoPreview from "../components/VideoPreview/video_preview";

class List extends Component {

    state = {
        classes: []
    }

    componentDidMount() {
        getData((data) => {
            this.setState({
                classes: data.training_classes
                    .map(clazz => {
                        const instructor = data.instructors.filter(instructor => instructor.id === clazz.instructor_id)[0];
                        clazz.instructor_id = instructor.name;

                        return clazz;
                    })
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
