import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    headers: {
      authorization: 'Bearer QWlzaHdhcnlhIE4=',
    },
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
};
export default makeRequest;
