import axios from "axios";

const URI = 'https://bestcycling-public.s3.eu-west-1.amazonaws.com/api-test/db.json';

export const getData = (callback) => {

    axios.get(URI)
        .then(res => callback(res.data));

}
