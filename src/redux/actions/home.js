import axios from 'axios';
import {GET_IMAGES} from '../../config/urls';
import store from '../store';

const {dispatch} = store;

export function getImages(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(GET_IMAGES + query)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
}
