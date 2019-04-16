import { userService } from '../../services';

const Mutation = {
  addUser: async (parent: any, args: any, context: any) => {
    const { data } = args;
    return userService.createUser(data);
  },
};

export default Mutation;
