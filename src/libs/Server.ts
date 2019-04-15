import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

export default class Server {
  public server: any;
  public app: express.Express;

  constructor(private config: any) {
    this.app = express();
  }
  public setupApolloServer(schema: any) {
    const { app } = this;
    this.server = new ApolloServer(schema);
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
