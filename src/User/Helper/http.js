import { default as axios } from 'axios'

const { REACT_APP_API_URL } = process.env.local

export default (token = false) => {
    return axios.create({
      baseURL: REACT_APP_API_URL,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });
}