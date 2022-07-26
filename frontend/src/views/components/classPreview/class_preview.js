import { Link } from "react-router-dom";
import { formatDate } from '../../../helpers/date';
import './class_preview.css';

export default function ClassPreview({ clazz }) {

    return(
        <Link className="class-preview-content" to={`/${clazz.id}`}>
            <div className="class-preview-header">
                <img width="150" src="bestcycling.png" />
                <p className="color-secondary">{formatDate(clazz.published)}</p>
            </div>
            <div className="class-preview-body">
                <h3 className="color-primary">{clazz.name}</h3>
                <span className="color-secondary">{clazz.instructor_id}</span>
            </div>
        </Link>
    );

}
