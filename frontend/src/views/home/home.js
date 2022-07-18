import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import ClassPreview from "../components/classPreview/class_preview";
import Navbar from "../components/navbar/navbar";
import ProfileInfo from "../components/profileInfo/profile_info";
import ProfileStats from "../components/profileStats/profile_stats";

import './home.css';

class Home extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        axios.get('https://bestcycling-public.s3.eu-west-1.amazonaws.com/api-test/db.json')
            .then(res => this.setState({data: res.data}));
    }

    render() {
        return(
            <div>
                <Navbar />

                <div className="wrap">
                    <div className="profile-content">
                        <img className="profile-content__avatar" width="250" src={this.state.data?.profile?.avatar} />
                        <div className="prifle-data">
                            <h1 className="profile-content__name">{this.state.data?.profile?.name}</h1>
                            <p><span>Ubicacion: </span> Valencia, Spain</p>
                        </div>
                    </div>

                    <hr />

                    <div className="profile-info">
                        <ProfileInfo />
                        <ProfileInfo />
                        <ProfileInfo />
                    </div>

                    <hr />

                    <div className="profile-stats">
                        <ProfileStats />
                        <ProfileStats />
                        <ProfileStats />
                        <ProfileStats />
                    </div>

                    <hr />

                    <div className="last-classes-content">
                        <div className="last-classes-header">
                            <h1>ÚLTIMAS CLASES</h1>
                            <Link className="button-basic" to="/list">VER TODAS</Link>
                        </div>
                        <div className="last-classes-body">
                            <ClassPreview />
                            <ClassPreview />
                            <ClassPreview />
                            <ClassPreview />
                            <ClassPreview />
                            <ClassPreview />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
