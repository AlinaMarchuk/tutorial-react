import axios from 'axios';

const SUMMARY_URL = 'contacts';

export const getSummary = () => {
  return axios.get(`${SUMMARY_URL}`);
};
