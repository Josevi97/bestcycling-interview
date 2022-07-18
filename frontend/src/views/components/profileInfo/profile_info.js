import { Component } from "react";
import './profile_info.css';

class ProfileInfo extends Component {
    render() {
        return(
            <div className="profile-info-content">
                <h1>{this.props.value}</h1>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default ProfileInfo;
