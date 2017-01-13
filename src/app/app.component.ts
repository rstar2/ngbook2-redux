import { Component, Inject } from '@angular/core';
import { Store } from "redux";

import { AppState } from "./store/state";
import { APP_STORE_TOKEN } from "./store/app-store";

import ChatExampleData from "./ChatExampleData";

@Component({
  selector: 'chat-root',
  template: `
  <div>
     <chat-page></chat-page>
  </div>
`,
})
export class AppComponent {
  constructor(@Inject(APP_STORE_TOKEN) private store: Store<AppState>) {
    ChatExampleData(store);
  }
}
