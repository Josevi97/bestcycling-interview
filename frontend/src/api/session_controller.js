import axios from "axios";

const URI = 'http://localhost:8080/session';

export const getSession = async () => {

    const res = await axios.get(URI);

    return res.data;

}
