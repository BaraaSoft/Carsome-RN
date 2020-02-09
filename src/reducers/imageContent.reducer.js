export const ImageContentReducer = (state = [], action) => {
    if (action.type === 'FETCH_IMGS') {
        return [...action.payload];
    }
    return state;
}