import axios from 'axios';
const API = "http://localhost:5000/api";
// Authentication
export async function fetch_login(user) {
    return await axios.post(`${API}/user/login`, { userSerial: user })
        .then((data) => { return data.data })
        .catch((err) => { return err; })
}
export async function fetch_initalRun(user) {
    return await axios.post(`${API}/user/install`, { userSerial: user })
        .then((data) => { return data.data })
        .catch((err) => { return err; })
}