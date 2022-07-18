import { Component } from "react";
import './profile_stats.css';

class ProfileStats extends Component {

    classNames = () => `profile-stats-value-background background-color-${this.props.color}`;

    render() {
        return(
            <div className="profile-stats-content">
                <div className={this.classNames()}><h1 className="profile-stats__value color-primary">{this.props.value}</h1></div>
                <span className="profile-stats__text color-secondary">{this.props.text}</span>
            </div>
        );
    }
}

export default ProfileStats;
