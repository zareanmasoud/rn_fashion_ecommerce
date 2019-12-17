describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('View'))).toBeVisible();
  });

  it('should increase add to cart count', async () => {
    await element(by.id('0')).tap();
    await element(by.id('add_to_cart_button')).tap();
    await expect(element(by.id('product_cart_text'))).toHaveText('1');
  });
  //
  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });
  //
  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
