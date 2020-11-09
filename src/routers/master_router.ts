import { Router } from 'express';
import route_one from './route_one';
import route_two from './route_two';


class MasterRouter {
  private _router = Router();
  private _subrouterA = route_one;
  private _subrouterB = route_two;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/route_one', this._subrouterA);
    this._router.use('/route_two', this._subrouterB);
  }
}

export = new MasterRouter().router;