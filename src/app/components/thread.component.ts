import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Thread } from "../model/thread";

/**
 * ChatThreadComponent shows an individual thread in the ChatThreadsComponent.
 * It indicates the currently selected thread
 */
@Component({
  inputs: ['thread', 'selected'],
  selector: 'chat-thread',
  outputs: ['onThreadSelected'],
  template: `
  <div class="media conversation">
    <div class="pull-left">
      <img class="media-object avatar"
           src="{{thread.avatarSrc}}">
    </div>
    <div class="media-body">
      <h5 class="media-heading contact-name">{{thread.name}}
        <span *ngIf="selected">&bull;</span>
      </h5>
      <small class="message-preview">
        {{thread.messages[thread.messages.length - 1].text}}
      </small>
    </div>
    <a (click)="clicked($event)" class="div-link">Select</a>
  </div>
  `
})
export class ChatThreadComponent {
  @Input()
  thread: Thread;
  @Input()
  selected: boolean;

  @Output()
  onThreadSelected: EventEmitter<Thread>;

  constructor() {
    this.onThreadSelected = new EventEmitter<Thread>();
  }

  clicked(event: any): void {
    this.onThreadSelected.emit(this.thread);
    event.preventDefault();
  }
}
