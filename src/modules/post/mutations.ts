import { postService } from '../../services';

const Mutation = {
  addPost: async (parent: any, args: any, context: any) => {
    // console.log('inside addPost');
    const { text } = args;
    // console.log(text);
    const createdBy = await context.sub;
    // console.log('data', {text, createdBy});
    return postService.createPost({ text, createdBy});
  },
  updatePost: async (parent: any, args: any, context: any) => {
    const { id, dataToUpdate } = args;
    return postService.updatePost(id, dataToUpdate);
  },
};

export default Mutation;
