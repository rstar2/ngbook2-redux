import { browser, element, by } from 'protractor';

export class NgBook2ReduxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('chat-root h1')).getText();
  }
}
