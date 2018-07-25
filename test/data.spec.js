// Ejecuta tu test
describe('network', () => {
  it('debe contener una función loginGoogle, para logear al usuario mediante Google,  en el objeto global network', () => {
    assert.isFunction(loginGoogle);
  });
  it('debe contener una función loginFacebook, para logear al usuario mediante Facebook, en el objeto global network', () => {
    assert.isFunction(loginFacebook);
  });
});
