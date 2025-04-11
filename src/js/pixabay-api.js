import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from 'axios';

export async function makeSearch(searchWords) {
    return axios.get(`https://pixabay.com/api/`, {
        params: {
            key: '44491424-16647b4b62eeb4d02a84100fb',
            q: searchWords,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 21,
        }
    })
};