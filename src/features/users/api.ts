import axios from 'axios';
import {BASE_URL} from '../../common/core/api/const';
import {Users} from './types';

class Api {
  getUsersAll = async () => {
    const url = `${BASE_URL}/users`;
    const resp = await axios.get<Users>(url);
    return resp.data;
  };
}

const usersApi = new Api();

export {usersApi};
