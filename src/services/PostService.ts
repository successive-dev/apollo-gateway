import axios from 'axios';
import { configuration } from '../configuration';

const postServicePort = configuration.postServicePort;

class PostService {
  public async createPost(post: any) {
    console.log(post);
    console.log('pre-create post- microservice arch');
    const { data } = await axios.post(
      `http://localhost:${postServicePort}/api/post`,
      {
        post,
      },
    );
    console.log('post-create post- microservice arch');
    return data;
  }

  public async getPosts() {
    const { data } = await axios.get(
      `http://localhost:${postServicePort}/api/post`,
    );
    return data;
  }

  public async updatePost(id: string, dataToUpdate: string) {
    const result = await axios.put(
      `http://localhost:${postServicePort}/api/post`,
      { id, dataToUpdate },
    );
    return result.data;
  }
}

export default new PostService();
