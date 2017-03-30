import { A2coursesPage } from './app.po';

describe('a2courses App', () => {
  let page: A2coursesPage;

  beforeEach(() => {
    page = new A2coursesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
