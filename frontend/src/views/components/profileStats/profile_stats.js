import './profile_stats.css';

export default function ProfileStats({ value, text, color }) {

    const classNames = () => `profile-stats-value-background background-color-${color}`;

    return(
        <div className="profile-stats-content">
            <div className={classNames()}><h1 className="profile-stats__value color-primary">{value}</h1></div>
            <span className="profile-stats__text color-secondary">{text}</span>
        </div>
    );

}
