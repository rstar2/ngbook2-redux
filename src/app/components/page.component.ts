import { Component } from '@angular/core';

/**
 * ChatPageComponent is the page which shows our chat view.
 * This is just the "presentational" component of the main AppComponent
 * In a larger app we'd have several pages.
 */
@Component({
  selector: 'chat-page',
  template: `
  <div>
    <chat-nav-bar></chat-nav-bar>
    <div class="container">
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  </div>
  `
})
export class ChatPageComponent {
}
