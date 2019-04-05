import axios from 'axios';

const Query = {
  helloworld: async () => {
    const { data } = await axios.get('http://localhost:9000/api/user');
    return data;
  },
};
export default Query;
