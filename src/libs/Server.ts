import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { userRouter } from "../services/user";

export default class Server {
  public server: any;
  public app: express.Express;

  constructor(private config: any) {
    this.app = express();
  }
  public setupApolloServer(schema: any) {
    const { app } = this;
    app.use("/api/user", userRouter);
    this.server = new ApolloServer(schema);
    this.server.applyMiddleware({ app, path: "/" });
    this.run();
  }
  public run() {
    this.app.listen(this.config.port, () => {
      console.log(`Listening on port: ${this.config.port}`);
    });
  }
  public initCors() {
    const corsOptions = {
      origin: "*",
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    };
    this.app.use(cors(corsOptions));
  }
}
