import axios from "axios";

const URI = 'http://localhost:8080/suscription';

export const createSuscription = async (id, data) => {
    const res = await axios.post(`${URI}/${id}`, data);

    return res.data;
}
