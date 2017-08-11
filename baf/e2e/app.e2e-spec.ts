import { BafPage } from './app.po';

describe('baf App', () => {
  let page: BafPage;

  beforeEach(() => {
    page = new BafPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
