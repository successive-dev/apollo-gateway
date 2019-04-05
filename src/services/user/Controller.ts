import { NextFunction, Request, Response } from 'express';

class User {
  public async get(req: Request, res: Response, next: NextFunction) {
    res.send('Hello World!');
  }
  public async post() {
    // implementation
  }
  public async put() {
    // implementation
  }
  public async delete() {
    // implementation
  }
}

export default new User();
