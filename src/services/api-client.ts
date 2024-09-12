import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '762832c2f10d4126af9ca3b2f552e5d5',
  },
});
