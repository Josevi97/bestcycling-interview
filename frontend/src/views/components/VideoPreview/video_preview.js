import { formatDate } from '../../../helpers/date';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './video_preview.css';

export default function VideoPreview({ clazz, onCheckbox }) {

    const [checked, setChecked] = useState(false);
    const [level, setLevel] = useState([]);
    const [color, setColor] = useState('yellow');

    const colors = ['yellow', 'red', 'green', 'blue'];

    const classNames = () => `video-preview-cat background-color-${color}`;

    const generateColor = () => colors[Math.floor(Math.random() * colors.length)];

    const alreadyViewed = () => {
        const data = localStorage.getItem('classes');

        return data && data.includes(clazz.id);
    }

    const onCheckboxClick = (e) => {
        e.stopPropagation();

        const _checked = !checked;

        setChecked(_checked);
        onCheckbox(clazz.id, _checked);
    }

    const checkboxClassNames = () => `video-preview-image-checkbox ${checked ? 'active' : ''}`;

    useEffect(() => {
        setLevel(new Array(3).fill(0).map((element, index) => index < clazz.level ? 1 : 0));
        setColor(generateColor());
    }, []);

    return (
        <Link className="video-preview-card" to={`/${clazz.id}`}>
            <div className="video-preview-image">
                <div className="video-preview-image-data">
                    <div onClick={(e) => onCheckboxClick(e)} className={checkboxClassNames()}>
                        <span className="material-symbols-outlined">
                            check
                        </span>
                        <input type="checkbox" />
                    </div>
                    <div className="video-preview-image-text">
                        <h3 className="color-primary">{clazz.name}</h3>
                        <span className="color-secondary-lighter">{clazz.instructor_id}</span>
                    </div>
                </div>

                {alreadyViewed() && (<span className="video-preview-image__pill pill">Completada</span>)}

                <img src={clazz.image} />
            </div>
            <div className="video-preview-data">
                <div className="video-preview-level">
                    <span className="color-secondary-lighter">Nivel </span>
                    <ul className="video-preview__level">
                        {
                            level.map((element, index) => <li key={index} className={`background-${element === 1 ? 'primary' : 'secondary'}`}></li>)
                        }
                    </ul>
                </div>
                <span className="video-preview__date color-secondary-lighter">{formatDate(clazz.published).split(' ').slice(0, 2).join(' ')}</span>
                <span className="video-preview__duration color-secondary-lighter">Duracion {clazz.duration}'</span>
            </div>
            <div className={classNames()}></div>
        </Link>
    );

}
