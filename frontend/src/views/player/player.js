import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getOne } from '../../api/test_controller';
import Navbar from '../components/navbar/navbar';
import './player.css'
import { getSession } from "../../api/session_controller";

export default function Player() {

    const [clazz, setClazz] = useState({});
    const [currentCount, setCurrentCount] = useState(5);
    const [ids, setIds] = useState([]);
    const [ready, setReady] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    const countValues = new Array(6)
        .fill(0)
        .map((value, index) => index === 0 ? 'FIN' : value + index);

    const navigateToSuscription = () => navigate('/suscription');

    const loadSession = (callback) => {
        getSession()
            .then(data => {
                if (!data || data.suscription === 0) {
                    navigateToSuscription();
                }
                else callback();
            })
            .catch(() => navigateToSuscription());
    }

    const loadData = (id) => {
        getOne(id)
            .then(data => {
                setClazz(data);
                setCurrentCount(countValues[countValues.length - 1]);
            });
    }

    useEffect(() => {
        loadSession(() => {
            const _ids = [...new Set(id.split('_'))];

            setIds(_ids);
            setReady(true);

            loadData(_ids[0]);
        });
    }, []);

    useEffect(() => {
        let interval;

        if (ready) {
            interval = setInterval(() => {
                if (currentCount > 0) {
                    setCurrentCount(prev => prev - 1);
                    return;
                }

                clearInterval(interval);

                const data = localStorage.getItem('classes') ? localStorage.getItem('classes') : [];
                const array = [data];
                array.push(clazz.id);

                localStorage.setItem('classes', array);

                const _ids = ids.splice(1);

                if(_ids.length > 0) {
                    loadSession(() => {
                        setIds(_ids);
                        loadData(_ids[0]);
                    });
                }
                else navigate(-1);

            }, 1000);
        }

        return () => clearInterval(interval);

    }, [ready, currentCount]);

    return !ready ? null : (
        <div>
            <Navbar />

            <div className="wrap player-content">
                <div className="player-header">
                    <button onClick={() => navigate(-1)} className="player-header__button">
                        <span className="material-symbols-outlined">
                            chevron_left
                        </span>
                    </button>
                    <div className="player-details">
                        <h1>{clazz.name}</h1>
                        <span>{clazz.instructor_id}</span>
                    </div>
                </div>
                <div className="player-video">
                    <h1>{countValues[currentCount]}</h1>
                </div>
            </div>
        </div>
    );

}
