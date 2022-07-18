import { Component } from "react";
import './profile_info.css';

class ProfileInfo extends Component {
    render() {
        return(
            <div className="profile-info-content">
                <h1 className="color-primary">{this.props.value}</h1>
                <span className="color-secondary">{this.props.text}</span>
            </div>
        );
    }
}

export default ProfileInfo;
