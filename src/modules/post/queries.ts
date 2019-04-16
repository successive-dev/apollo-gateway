import { postService } from '../../services';

const Query = {
  getPosts: async () => {
    console.log('inside getPosts');
    return postService.getPosts();
  },
};
export default Query;
