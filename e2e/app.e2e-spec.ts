import { FormsDemoPage } from './app.po';

describe('forms-demo App', function() {
  let page: FormsDemoPage;

  beforeEach(() => {
    page = new FormsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
