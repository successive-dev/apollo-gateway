import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import fetchUser from './fetchUser';

export default class Server {
  public server: any;
  public app: express.Express;

  constructor(private config: any) {
    this.app = express();
  }
  public setupApolloServer(schema: any) {
    // console.log({...schema, ...{
    //   context: async ({ req }) => {
    //     console.log('context running');
    //     // get the user token from the headers
    //     const token = req.headers.authorization || '';
    //     // try to retrieve a user with the token
    //     const sub  = await fetchUser(token);
    //     // add the user to the context
    //     return { sub };
    //   },
    // }})
    const { app } = this;
    this.server = new ApolloServer({...schema, ...{
      context: ({ req }) => {
        console.log('context running');
        // get the user token from the headers
        const token = req.headers.authorization || '';
        // try to retrieve a user with the token
        const sub  = fetchUser(token).then( (res) => {
          console.log(res);
          return res;
        }).catch((err) => {
          throw new Error(err.message);
        });
        // add the user to the context
        return { sub };
      },
    }});
    this.server.applyMiddleware({ app, path: '/' });
    this.run();
  }
  public async run() {
    this.app.listen(this.config.port, () => {
      console.log(`Listening on port: ${this.config.port}`);
    });
  }
  public initCors() {
    const corsOptions = {
      optionsSuccessStatus: 200,
      origin: '*',
    };
    this.app.use(cors(corsOptions));
  }
}
