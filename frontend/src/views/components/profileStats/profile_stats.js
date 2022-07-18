import { Component } from "react";
import './profile_stats.css';

class ProfileStats extends Component {

    classNames = () => `profile-stats-value-background background-color-${this.props.color}`;

    render() {
        return(
            <div className="profile-stats-content">
                <div className={this.classNames()}><h1>{this.props.value}</h1></div>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default ProfileStats;
