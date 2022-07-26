import './profile_info.css';

export default function ProfileInfo({ value, text }) {

    return(
        <div className="profile-info-content">
            <h1 className="color-primary">{value}</h1>
            <span className="color-secondary">{text}</span>
        </div>
    );

}
