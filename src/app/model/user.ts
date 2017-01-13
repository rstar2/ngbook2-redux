import { uuid } from '../util/uuid';

export class User {
  id: string;

  constructor(public name: string,
              public avatarSrc: string,
              public isClient?: boolean) {
    this.id = uuid();
  }
}
