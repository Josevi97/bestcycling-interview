import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import './list.css';
import { getData, findClasses } from "../../api/test_controller";
import VideoPreview from "../components/VideoPreview/video_preview";
import { Link } from "react-router-dom";

export default function List() {

    const [classes, setClasses] = useState([]);
    const [data, setData] = useState([]);

    const modifyData = (id, add) => {
        if (add) {
            data.push(id);
            setData(data);
        }
        else setData(data.filter(value => value !== id));
    }

    const classNames = () => `list-play-all ${data.length > 0 ? '' : 'disabled'}`;

    getData().then(data => setClasses(findClasses(data)));

    return (
        <div>
            <Navbar />

            <div className="wrap list-content">
                <div className="list-header">
                    <Link className={classNames()} to={`/${data.join('_')}`}>
                        <span className="material-symbols-outlined">
                            play_arrow
                        </span>
                        REPRODUCIR AUTOMATICAMENTE
                    </Link>
                </div>

                <div className="list-body">
                    {
                        classes.map(clazz => <VideoPreview key={clazz.id} clazz={clazz} onCheckbox={modifyData.bind(this)} />)
                    }
                </div>
            </div>
        </div>
    )

}
