import { Component, OnInit } from '@angular/core';
import { MessageService, ThreadService } from '../services';
import { Message, Thread } from '../model';
import * as _ from 'lodash';

@Component({
  selector: 'chat-nav-bar',
  template: `
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="https://ng-book.com/2">
          <img src="assets/images/logos/ng-book-2-minibook.png"/>
           ng-book 2
        </a>
      </div>
      <p class="navbar-text navbar-right">
        <button class="btn btn-primary" type="button">
          Messages <span class="badge">{{unreadMessagesCount}}</span>
        </button>
      </p>
    </div>
  </nav>
  `
})
export class ChatNavBarComponent implements OnInit {
  private unreadMessagesCount: number;

  constructor(private messageService: MessageService,
              private threadService: ThreadService) {
  }

  ngOnInit(): void {
    this.messageService.messages
      .combineLatest(
        this.threadService.getCurrentThread(),
        (messages: Message[], currentThread: Thread) =>
          [currentThread, messages])

      .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
        this.unreadMessagesCount =
          _.reduce(
            messages,
            (sum: number, m: Message) => {
              let messageIsInCurrentThread: boolean = m.thread &&
                currentThread &&
                (currentThread.id === m.thread.id);
              if (m && !m.isRead && !messageIsInCurrentThread) {
                sum = sum + 1;
              }
              return sum;
            },
            0);
      });
  }
}

