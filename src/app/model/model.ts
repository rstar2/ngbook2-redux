import { uuid } from '../util/uuid';

export class User {
  id: string;

  constructor(public name: string,
              public avatarSrc: string,
              public isClient?: boolean) {
    this.id = uuid();
  }
}

export class Thread {
  id: string;
  lastMessage?: Message;
  name: string;
  avatarSrc: string;
  messages: Message[];

  constructor(id?: string,
              name?: string,
              avatarSrc?: string) {
    this.id = id || uuid();
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}

export class Message {
  id: string;
  sentAt: Date;
  isRead: boolean;
  author: User;
  text: string;
  thread: Thread;

  constructor(obj?: any) {
    this.id = obj && obj.id || uuid();
    this.isRead = obj && obj.isRead || false;
    this.sentAt = obj && obj.sentAt || new Date();
    this.author = obj && obj.author || null;
    this.text = obj && obj.text || null;
    this.thread = obj && obj.thread || null;
  }
}
