import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        // Authorization: 'Client-ID a3077662d74527bcad8651a21d220ffc9b5211e591288ad8d895e4a3d53777ce'
    }
})