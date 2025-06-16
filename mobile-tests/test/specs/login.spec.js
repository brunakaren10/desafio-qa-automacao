describe('Login e Navegação', () => {
  it('Deve realizar login e navegar até a aba de produtos', async () => {
    const username = await $('~test-Username');
    const password = await $('~test-Password');
    const loginBtn = await $('~test-LOGIN');

    await username.setValue('standard_user');
    await password.setValue('secret_sauce');
    await loginBtn.click();

    // Verifica se foi redirecionado para a página de inventário
    const productsTitle = await $('~test-PRODUCTS');
    await expect(productsTitle).toBeDisplayed();
  });
});