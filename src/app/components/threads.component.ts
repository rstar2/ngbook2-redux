import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ThreadService } from '../services';
import { Observable } from 'rxjs';
import { Thread } from '../model';

@Component({
  inputs: ['thread'],
  selector: 'chat-thread',
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
      <small class="message-preview">{{thread.lastMessage.text}}</small>
    </div>
    <a (click)="clicked($event)" class="div-link">Select</a>
  </div>
  `
})
export class ChatThreadComponent implements OnInit {
  private thread: Thread;
  private selected: boolean = false;

  constructor(private threadService: ThreadService) {
  }

  ngOnInit(): void {
    this.threadService.getCurrentThread()
      .subscribe((currentThread: Thread) => {
        this.selected = currentThread &&
          this.thread &&
          (currentThread.id === this.thread.id);
      });
  }

  clicked(event: any): void {
    this.threadService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}


@Component({
  selector: 'chat-threads',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- conversations -->
    <div class="row">
      <div class="conversation-wrap">

        <chat-thread
             *ngFor="let thread of threads$ | async"
             [thread]="thread">
        </chat-thread>

      </div>
    </div>
  `
})
export class ChatThreadsComponent {
  threads$: Observable<Thread[]>;

  constructor(private threadService: ThreadService) {
  }

  ngOnInit(): void {
    this.threads$ = this.threadService.orderedThreads;
  }
}
