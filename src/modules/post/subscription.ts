import { PubSub } from 'apollo-server-express';

const pubsub = new PubSub();

const Subscription = {
  newPost: {
    subscribe: () => { pubsub.asyncIterator('NEW_POST'); },
  },
};

export { Subscription, pubsub };
