import './suscription_option.css';

export default function SuscriptionOption({ onSuscribe, value }) {

    return(
        <div onClick={() => onSuscribe(value)} className="suscription-option">
            <h1>{`${value} ${value == 1 ? 'minuto' : 'minutos'}`}</h1>
        </div>
    );

}
