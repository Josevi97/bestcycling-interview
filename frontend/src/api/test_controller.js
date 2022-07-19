import axios from "axios";

const URI = 'https://bestcycling-public.s3.eu-west-1.amazonaws.com/api-test/db.json';

export const getData = (callback) => {

    axios.get(URI)
        .then(res => callback(res.data));

}


export const formatDate = (seconds) => {
    const formatter = new Intl.DateTimeFormat('es', { day: "numeric", month: "short", year: "numeric" });
    const time = formatter.format(new Date(seconds));

    return time
        .split(' ')
        .map((word, index) => index === 1 ? `${word[0].toUpperCase()}${word.substring(1)}` : word)
        .join(' ');
}
