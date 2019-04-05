import axios from 'axios';

const Query = {
  helloworld: () => {
    axios
      .get('http://localhost:9000/api/user')
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default Query;
