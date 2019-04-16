import { postService } from '../../services';
import { pubsub } from './subscription';

const Mutation = {
  addPost: async (parent: any, args: any, context: any) => {
    // console.log('inside addPost');
    const { text } = args;
    // console.log(text);
    const createdBy = await context.sub;
    // console.log('data', {text, createdBy});
    const newPost =  postService.createPost({ text, createdBy});
    pubsub.publish('NEW_POST', {newPost});
    return newPost;
  },
  updatePost: async (parent: any, args: any, context: any) => {
    const { id, text } = args;
    return postService.updatePost(id, text);
  },
};

export default Mutation;
