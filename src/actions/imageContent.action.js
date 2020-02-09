import axios from 'axios'

const PlaceHolderApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchImagesContent = (id) => async dispatch => {
    const response = await PlaceHolderApi.get(`/photos?albumId=${id}`);
    dispatch({
        type: 'FETCH_IMGS',
        payload: response.data
    });
}