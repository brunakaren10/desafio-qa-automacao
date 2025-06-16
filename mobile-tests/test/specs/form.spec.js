describe('Preenchimento de Formulário', () => {
    it('Deve preencher e enviar o formulário', async () => {
      // Pressupõe que já esteja logado ou navegue até a tela de formulário
  
      const nameInput = await $('~test-Name');
      const emailInput = await $('~test-Email');
      const submitBtn = await $('~test-SEND');
  
      await nameInput.setValue('Bruna QA');
      await emailInput.setValue('bruna@example.com');
      await submitBtn.click();
  
      const successMessage = await $('~test-SUCCESS');
      await expect(successMessage).toBeDisplayed();
    });
  });
  