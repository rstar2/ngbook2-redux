import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appStateProvider } from "./store/app-store";

import { AppComponent } from './app.component';
import { ChatPageComponent } from "./components/page.component";
import { ChatWindowComponent } from "./components/window.component";
import { ChatMessageComponent } from "./components/message.component";
import { ChatNavBarComponent } from "./components/nav-bar.component";
import { ChatThreadsComponent } from "./components/threads.component";
import { ChatThreadComponent } from "./components/thread.component";

import { FromNowPipe } from "./pipes/from-now.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    ChatNavBarComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    ChatThreadsComponent,
    ChatThreadComponent,

    FromNowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [appStateProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
