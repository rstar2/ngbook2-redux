import { Component, Inject } from "@angular/core";
import { Store } from "redux";

import { APP_STORE_TOKEN } from "../store/app-store";
import { AppState } from "../store/state";
import { getUnreadMessagesCount } from "../store/reducers";

/**
 * ChatNavBarComponent shows the header and unread count
 */
@Component({
  selector: 'chat-nav-bar',
  template: `
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="https://ng-book.com/2">
          <img src="${require('assets/images/logos/ng-book-2-minibook.png')}"/>
           ng-book 2
        </a>
      </div>
      <p class="navbar-text navbar-right">
        <button class="btn btn-primary" type="button">
          Messages <span class="badge">{{ unreadMessagesCount }}</span>
        </button>
      </p>
    </div>
  </nav>
  `
})
export class ChatNavBarComponent  {
  unreadMessagesCount: number;

  constructor(@Inject(APP_STORE_TOKEN) private store: Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState() {
    this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState());
  }
}
