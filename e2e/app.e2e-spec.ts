import { NgSightPage } from './app.po';

describe('ng-sight App', () => {
  let page: NgSightPage;

  beforeEach(() => {
    page = new NgSightPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
