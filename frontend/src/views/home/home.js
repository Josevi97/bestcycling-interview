import { Component } from "react";
import { Link } from "react-router-dom";
import ClassPreview from "../components/classPreview/class_preview";
import Navbar from "../components/navbar/navbar";
import ProfileInfo from "../components/profileInfo/profile_info";
import ProfileStats from "../components/profileStats/profile_stats";

import { getData, findClasses } from "../../api/test_controller";

import './home.css';

class Home extends Component {

    state = {
        data: {},
        classes: []
    }

    componentDidMount() {
        getData()
            .then(data => {
                this.setState({
                    data: data,
                    classes: findClasses(data, 6)
            });
        });
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="wrap">
                    <div className="profile-content">
                        <img className="profile-content__avatar" width="250" src={this.state.data?.profile?.avatar} />
                        <div className="profile-data">
                            <h1 className="profile-content__name color-primary">{this.state.data?.profile?.name}</h1>
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
                            value={this.state.data?.profile?.level}
                            text="NIVEL" />
                        <ProfileInfo
                            value={this.state.data?.profile?.perseverance}
                            text="CONSTANCIA" />
                        <ProfileInfo
                            value={this.state.data?.profile?.total_points}
                            text="PUNTOS" />
                    </div>

                    <hr />

                    <div className="profile-stats">
                        <ProfileStats
                            value={this.state.data?.profile?.stamina_points}
                            color="yellow"
                            text="Resistencia" />
                        <ProfileStats
                            value={this.state.data?.profile?.strength_points}
                            color="red"
                            text="Fuerza" />
                        <ProfileStats
                            value={this.state.data?.profile?.flexiblity_points}
                            color="green"
                            text="Flexibilidad" />
                        <ProfileStats
                            value={this.state.data?.profile?.mind_points}
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
                                this.state.classes.map((clazz, index) => <ClassPreview key={index} clazz={clazz} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
