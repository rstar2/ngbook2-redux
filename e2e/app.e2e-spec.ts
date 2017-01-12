import { NgBook2ReduxPage } from './app.po';

describe('ng-book2-redux App', function() {
  let page: NgBook2ReduxPage;

  beforeEach(() => {
    page = new NgBook2ReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('chat works!');
  });
});
