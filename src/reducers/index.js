import { combineReducers } from 'redux';
import { ImageContentReducer } from './imageContent.reducer'



export default combineReducers({ imagesContent: ImageContentReducer });