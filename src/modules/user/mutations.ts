import { userService } from '../../services/user';

const Mutation = {
  addUser: async (parent: any, args: any) => {
    console.log('Mutation reached');
    const { data } = args;
    return userService.createUser(data);
  },
};

export default Mutation;
