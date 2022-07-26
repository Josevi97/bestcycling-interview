import { useState } from "react";
import { Link } from "react-router-dom";
import ClassPreview from "../components/classPreview/class_preview";
import Navbar from "../components/navbar/navbar";
import ProfileInfo from "../components/profileInfo/profile_info";
import ProfileStats from "../components/profileStats/profile_stats";

import { getData, findClasses } from "../../api/test_controller";

import './home.css';

export default function Home() {

    const [data, setData] = useState({});
    const [classes, setClasses] = useState([]);

    getData()
        .then(data => {
            setData(data);
            setClasses(findClasses(data, 6));
        });

    return (
        <div>
            <Navbar />

            <div className="wrap">
                <div className="profile-content">
                    <img className="profile-content__avatar" width="250" src={data?.profile?.avatar} />
                    <div className="profile-data">
                        <h1 className="profile-content__name color-primary">{data?.profile?.name}</h1>
                        <p className="profile-content__ubication color-secondary">
                            <span className="material-symbols-outlined">
                                pin_drop
                            </span>
                            Valencia, Spain
                        </p>
                    </div>
                </div>

                <hr />

                <div className="profile-info">
                    <ProfileInfo
                        value={data?.profile?.level}
                        text="NIVEL" />
                    <ProfileInfo
                        value={data?.profile?.perseverance}
                        text="CONSTANCIA" />
                    <ProfileInfo
                        value={data?.profile?.total_points}
                        text="PUNTOS" />
                </div>

                <hr />

                <div className="profile-stats">
                    <ProfileStats
                        value={data?.profile?.stamina_points}
                        color="yellow"
                        text="Resistencia" />
                    <ProfileStats
                        value={data?.profile?.strength_points}
                        color="red"
                        text="Fuerza" />
                    <ProfileStats
                        value={data?.profile?.flexiblity_points}
                        color="green"
                        text="Flexibilidad" />
                    <ProfileStats
                        value={data?.profile?.mind_points}
                        color="blue"
                        text="Fuerza" />
                </div>

                <hr />

                <div className="last-classes-content">
                    <div className="last-classes-header">
                        <h1 className="color-primary">ÚLTIMAS CLASES</h1>
                        <Link className="button-basic" to="/list">VER TODAS</Link>
                    </div>
                    <div className="last-classes-body">
                        {
                            classes.map((clazz, index) => <ClassPreview key={index} clazz={clazz} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
